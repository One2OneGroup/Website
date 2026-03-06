from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Notification email
NOTIFICATION_EMAIL = "tylor@theone2onegroup.co.za"

# SMTP config (optional - if configured, emails will be sent)
SMTP_HOST = os.environ.get('SMTP_HOST', '')
SMTP_PORT = int(os.environ.get('SMTP_PORT', '587'))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASS = os.environ.get('SMTP_PASS', '')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    company_name: Optional[str] = ""
    email: str
    phone: Optional[str] = ""
    service: Optional[str] = ""
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False


class ContactSubmissionCreate(BaseModel):
    full_name: str
    company_name: Optional[str] = ""
    email: str
    phone: Optional[str] = ""
    service: Optional[str] = ""
    message: str


def send_notification_email(submission: ContactSubmission) -> bool:
    """Send email notification for new contact submission."""
    if not SMTP_HOST or not SMTP_USER or not SMTP_PASS:
        logger.info("SMTP not configured - skipping email notification")
        return False
    
    try:
        msg = MIMEMultipart('alternative')
        msg['From'] = SMTP_USER
        msg['To'] = NOTIFICATION_EMAIL
        msg['Subject'] = f"New Enquiry from {submission.full_name} - One 2 One Group"
        
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #0a0a0a; padding: 30px; border-radius: 12px; margin-bottom: 20px;">
                <h1 style="color: #fff; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
            </div>
            <div style="padding: 20px; border: 1px solid #e5e5e5; border-radius: 12px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 10px 0; color: #888; width: 140px;">Name</td><td style="padding: 10px 0; font-weight: 600;">{submission.full_name}</td></tr>
                    <tr><td style="padding: 10px 0; color: #888;">Company</td><td style="padding: 10px 0;">{submission.company_name or 'Not provided'}</td></tr>
                    <tr><td style="padding: 10px 0; color: #888;">Email</td><td style="padding: 10px 0;"><a href="mailto:{submission.email}">{submission.email}</a></td></tr>
                    <tr><td style="padding: 10px 0; color: #888;">Phone</td><td style="padding: 10px 0;">{submission.phone or 'Not provided'}</td></tr>
                    <tr><td style="padding: 10px 0; color: #888;">Service</td><td style="padding: 10px 0;">{submission.service or 'Not specified'}</td></tr>
                </table>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                    <p style="color: #888; margin: 0 0 8px 0;">Message</p>
                    <p style="margin: 0; line-height: 1.6;">{submission.message}</p>
                </div>
            </div>
            <p style="color: #aaa; font-size: 12px; margin-top: 20px;">Submitted on {submission.timestamp.strftime('%d %B %Y at %H:%M UTC')}</p>
        </body>
        </html>
        """
        
        msg.attach(MIMEText(html_body, 'html'))
        
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
        
        logger.info(f"Notification email sent for submission {submission.id}")
        return True
    except Exception as e:
        logger.error(f"Failed to send notification email: {e}")
        return False


# Routes
@api_router.get("/")
async def root():
    return {"message": "One 2 One Group API"}


@api_router.post("/contact")
async def create_contact_submission(input_data: ContactSubmissionCreate):
    """Submit a contact enquiry."""
    try:
        submission = ContactSubmission(**input_data.model_dump())
        
        # Store in MongoDB
        doc = submission.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.contact_submissions.insert_one(doc)
        
        # Try to send email notification
        email_sent = send_notification_email(submission)
        
        # Update email_sent status
        if email_sent:
            await db.contact_submissions.update_one(
                {"id": submission.id},
                {"$set": {"email_sent": True}}
            )
        
        logger.info(f"Contact submission created: {submission.id} (email_sent={email_sent})")
        
        return {
            "id": submission.id,
            "message": "Enquiry submitted successfully",
            "timestamp": submission.timestamp.isoformat()
        }
    except Exception as e:
        logger.error(f"Error creating contact submission: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit enquiry")


@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """Retrieve all contact submissions."""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    for sub in submissions:
        if isinstance(sub.get('timestamp'), str):
            sub['timestamp'] = datetime.fromisoformat(sub['timestamp'])
    return submissions


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()