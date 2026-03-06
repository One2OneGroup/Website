#!/usr/bin/env python3
"""
Backend API Testing for One 2 One Group Website
Tests the contact submission endpoints as specified in the review request.
"""

import requests
import json
from datetime import datetime
import time

# Backend URL from environment
BACKEND_URL = "https://o21-transform.preview.emergentagent.com/api"

def test_api_health():
    """Test basic API connectivity."""
    print("🔍 Testing API Health...")
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print(f"✅ API Health Check: {data.get('message', 'OK')}")
            return True
        else:
            print(f"❌ API Health Check Failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API Health Check Error: {e}")
        return False

def test_post_contact_full_data():
    """Test POST /api/contact with all fields provided."""
    print("\n🔍 Testing POST /api/contact (full data)...")
    
    test_data = {
        "full_name": "Sarah Johnson",
        "company_name": "TechCorp Solutions",
        "email": "sarah.johnson@techcorp.com",
        "phone": "+27 11 123 4567",
        "service": "Digital Transformation",
        "message": "We are interested in your digital transformation services for our enterprise. Please contact us to discuss our requirements and schedule a consultation meeting."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Response Status: {response.status_code}")
        print(f"Response Body: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "message", "timestamp"]
            
            if all(field in data for field in required_fields):
                print(f"✅ POST /api/contact (full data): Success")
                print(f"   ID: {data['id']}")
                print(f"   Message: {data['message']}")
                print(f"   Timestamp: {data['timestamp']}")
                return data["id"]
            else:
                missing = [f for f in required_fields if f not in data]
                print(f"❌ Missing required response fields: {missing}")
                return None
        else:
            print(f"❌ POST /api/contact (full data): Failed with status {response.status_code}")
            return None
            
    except Exception as e:
        print(f"❌ POST /api/contact (full data): Error - {e}")
        return None

def test_post_contact_minimal_data():
    """Test POST /api/contact with only required fields."""
    print("\n🔍 Testing POST /api/contact (minimal data)...")
    
    test_data = {
        "full_name": "Michael Chen",
        "email": "michael.chen@example.com",
        "message": "I would like to learn more about your consulting services. Please send me more information about your offerings and pricing."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Response Status: {response.status_code}")
        print(f"Response Body: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "message", "timestamp"]
            
            if all(field in data for field in required_fields):
                print(f"✅ POST /api/contact (minimal data): Success")
                print(f"   ID: {data['id']}")
                print(f"   Message: {data['message']}")
                print(f"   Timestamp: {data['timestamp']}")
                return data["id"]
            else:
                missing = [f for f in required_fields if f not in data]
                print(f"❌ Missing required response fields: {missing}")
                return None
        else:
            print(f"❌ POST /api/contact (minimal data): Failed with status {response.status_code}")
            return None
            
    except Exception as e:
        print(f"❌ POST /api/contact (minimal data): Error - {e}")
        return None

def test_post_contact_validation_errors():
    """Test POST /api/contact with invalid data."""
    print("\n🔍 Testing POST /api/contact (validation errors)...")
    
    # Test missing required field
    invalid_data = {
        "company_name": "Test Company",
        "email": "test@example.com",
        # Missing full_name and message
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Response Status: {response.status_code}")
        
        if response.status_code == 422 or response.status_code == 400:
            print(f"✅ POST /api/contact (validation): Correctly rejected invalid data")
            return True
        else:
            print(f"❌ POST /api/contact (validation): Should have rejected invalid data but got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/contact (validation): Error - {e}")
        return False

def test_get_contact_submissions(expected_ids=None):
    """Test GET /api/contact to retrieve all submissions."""
    print("\n🔍 Testing GET /api/contact...")
    
    try:
        response = requests.get(f"{BACKEND_URL}/contact", timeout=10)
        
        print(f"Response Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            
            if isinstance(data, list):
                print(f"✅ GET /api/contact: Success (found {len(data)} submissions)")
                
                # Check if our test submissions are in the response
                if expected_ids and len(expected_ids) > 0:
                    found_ids = [sub.get('id') for sub in data if sub.get('id')]
                    missing_ids = [id for id in expected_ids if id and id not in found_ids]
                    
                    if not missing_ids:
                        print(f"✅ All test submissions found in GET response")
                    else:
                        print(f"❌ Some test submissions missing: {missing_ids}")
                        return False
                
                # Validate response format for first submission if any exist
                if len(data) > 0:
                    first_sub = data[0]
                    required_fields = ["id", "full_name", "email", "message", "timestamp"]
                    
                    if all(field in first_sub for field in required_fields):
                        print(f"✅ Response format validation: All required fields present")
                        return True
                    else:
                        missing = [f for f in required_fields if f not in first_sub]
                        print(f"❌ Missing required fields in response: {missing}")
                        return False
                else:
                    print(f"ℹ️ No submissions in database yet")
                    return True
            else:
                print(f"❌ GET /api/contact: Expected array, got {type(data)}")
                return False
        else:
            print(f"❌ GET /api/contact: Failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ GET /api/contact: Error - {e}")
        return False

def run_backend_tests():
    """Run all backend API tests."""
    print("=" * 70)
    print("🚀 BACKEND API TESTING - One 2 One Group Website")
    print("=" * 70)
    
    results = {}
    submission_ids = []
    
    # Test API health first
    results["api_health"] = test_api_health()
    if not results["api_health"]:
        print("\n❌ API is not accessible. Cannot continue testing.")
        return results
    
    # Test POST endpoints
    id1 = test_post_contact_full_data()
    results["post_contact_full"] = id1 is not None
    if id1:
        submission_ids.append(id1)
    
    # Small delay between requests
    time.sleep(0.5)
    
    id2 = test_post_contact_minimal_data()
    results["post_contact_minimal"] = id2 is not None
    if id2:
        submission_ids.append(id2)
    
    # Test validation
    time.sleep(0.5)
    results["post_contact_validation"] = test_post_contact_validation_errors()
    
    # Test GET endpoint
    time.sleep(0.5)
    results["get_contact"] = test_get_contact_submissions(submission_ids)
    
    # Summary
    print("\n" + "=" * 70)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 70)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.upper().replace('_', ' ')}: {status}")
    
    print(f"\n🎯 OVERALL: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests PASSED!")
    else:
        print("⚠️ Some backend tests FAILED - check logs above")
    
    return results

if __name__ == "__main__":
    run_backend_tests()