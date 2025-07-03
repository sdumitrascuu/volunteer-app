{
  "users"= [
    {
      "id": "volunteer1",
      "role": "volunteer",
      "email": "john.doe@example.com",
      "password": "volunteer321",
      "profile": {
        "fullName": "John Doe",
        "address1": "456 Maple Lane",
        "address2": "Apt 7B",
        "city": "Austin",
        "state": "TX",
        "zip": "78701",
        "skills": ["First Aid", "Teaching", "Cooking"],
        "preferences": "Prefer morning shifts, comfortable with outdoor events.",
        "availability": ["2025-07-10", "2025-07-17", "2025-07-24"]
      }
    },
    {
      "id": "volunteer2",
      "role": "volunteer",
      "email": "jane.doe@example.com",
      "password": "volunteer123",
      "profile": {
        "fullName": "Jane Doe",
        "address1": "123 Oak Street",
        "address2": "",
        "city": "Houston",
        "state": "TX",
        "zip": "77005",
        "skills": ["Tutoring", "Driving"],
        "preferences": "",
        "availability": ["2025-07-05", "2025-07-12"]
      }
    },
    {
      "id": "admin1",
      "role": "admin",
      "email": "julia.admin@example.com",
      "password": "hashed_pw"
    }
  ],
  "skills"= ["First Aid", "Teaching", "Cooking", "Driving", "Event Management", "IT Support", "Public Speaking"],
  "states"= [
    { "name": "Texas", "code": "TX" },
    { "name": "California", "code": "CA" },
    { "name": "New York", "code": "NY" },
    { "name": "Florida", "code": "FL" }
  ],
  "events"= [
    {
      "id": "event1",
      "name": "Community Park Cleanup",
      "description": "Help clean up the local community park and prepare the garden beds.",
      "location": "123 Park Ave, Austin, TX",
      "requiredSkills": ["First Aid", "Event Management"],
      "urgency": "High",
      "eventDate": "2025-07-15"
    },
    {
      "id": "event2",
      "name": "Literacy Tutoring Session",
      "description": "Assist children with reading and writing activities.",
      "location": "456 Library Lane, Houston, TX",
      "requiredSkills": ["Teaching", "Tutoring"],
      "urgency": "Medium",
      "eventDate": "2025-07-20"
    }
  ],
  "matches"= [
    { "volunteerName": "John Doe", "matchedEvent": "Community Park Cleanup" },
    { "volunteerName": "Jane Doe", "matchedEvent": "Literacy Tutoring Session" }
  ],
  "notifications"= [
    {
      "id": "notif1",
      "recipientId": "volunteer1",
      "message": "You have been assigned to Community Park Cleanup on 2025-07-15.",
      "type": "assignment",
      "date": "2025-07-01"
    },
    {
      "id": "notif2",
      "recipientId": "volunteer2",
      "message": "Reminder: Literacy Tutoring Session is on 2025-07-20.",
      "type": "reminder",
      "date": "2025-07-18"
    }
  ],
  "history"= [
    {
      "volunteerName": "John Doe",
      "eventName": "Community Park Cleanup",
      "eventDescription": "Help clean up the local community park and prepare the garden beds.",
      "location": "123 Park Ave, Austin, TX",
      "requiredSkills": ["First Aid", "Event Management"],
      "urgency": "High",
      "eventDate": "2025-07-15",
      "participationStatus": "Completed"
    },
    {
      "volunteerName": "Jane Doe",
      "eventName": "Literacy Tutoring Session",
      "eventDescription": "Assist children with reading and writing activities.",
      "location": "456 Library Lane, Houston, TX",
      "requiredSkills": ["Teaching", "Tutoring"],
      "urgency": "Medium",
      "eventDate": "2025-07-20",
      "participationStatus": "Scheduled"
    }
  ]
}
