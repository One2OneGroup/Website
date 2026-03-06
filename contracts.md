# API Contracts — One 2 One Group Website

## API Endpoints

### 1. POST /api/contact
Submit a contact form enquiry.

**Request:**
```json
{
  "full_name": "string (required)",
  "company_name": "string (optional)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "service": "string (optional)",
  "message": "string (required)"
}
```

**Response (201):**
```json
{
  "id": "string",
  "message": "Enquiry submitted successfully",
  "timestamp": "ISO datetime"
}
```

### 2. GET /api/contact
Retrieve all contact submissions (admin).

**Response (200):**
```json
[
  {
    "id": "string",
    "full_name": "string",
    "company_name": "string",
    "email": "string",
    "phone": "string",
    "service": "string",
    "message": "string",
    "timestamp": "ISO datetime",
    "email_sent": boolean
  }
]
```

## Mock Data to Replace
- Contact form submission (currently saves to browser state only) → MongoDB storage + email notification

## Backend Implementation
- MongoDB collection: `contact_submissions`
- Email notification to: tylor@theone2onegroup.co.za (via SMTP when configured)
- All submissions stored in DB regardless of email status

## Frontend Integration
- Contact.jsx: Replace mock form submission with POST /api/contact
- Show success/error states based on API response
