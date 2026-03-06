#!/usr/bin/env python3
"""
Additional backend verification - Check specific data storage and retrieval.
"""

import requests
import json

BACKEND_URL = "https://o21-transform.preview.emergentagent.com/api"

def verify_data_persistence():
    """Verify that data is properly stored and retrieved."""
    print("🔍 Verifying data persistence...")
    
    # Submit a unique test entry
    unique_data = {
        "full_name": "Data Persistence Test User",
        "email": "persistence.test@verification.com",
        "message": "This is a unique test message for data verification - ID12345"
    }
    
    try:
        # Submit data
        post_response = requests.post(
            f"{BACKEND_URL}/contact",
            json=unique_data,
            headers={"Content-Type": "application/json"}
        )
        
        if post_response.status_code != 200:
            print(f"❌ POST failed: {post_response.status_code}")
            return False
            
        submission_data = post_response.json()
        submission_id = submission_data["id"]
        
        # Retrieve all submissions
        get_response = requests.get(f"{BACKEND_URL}/contact")
        
        if get_response.status_code != 200:
            print(f"❌ GET failed: {get_response.status_code}")
            return False
        
        all_submissions = get_response.json()
        
        # Find our submission
        found_submission = None
        for sub in all_submissions:
            if sub["id"] == submission_id:
                found_submission = sub
                break
        
        if not found_submission:
            print(f"❌ Submission {submission_id} not found in GET response")
            return False
        
        # Verify data integrity
        if (found_submission["full_name"] == unique_data["full_name"] and
            found_submission["email"] == unique_data["email"] and
            found_submission["message"] == unique_data["message"]):
            print("✅ Data persistence verified - all fields match")
            return True
        else:
            print("❌ Data integrity issue - fields don't match")
            print(f"Expected: {unique_data}")
            print(f"Found: {found_submission}")
            return False
            
    except Exception as e:
        print(f"❌ Verification error: {e}")
        return False

if __name__ == "__main__":
    verify_data_persistence()