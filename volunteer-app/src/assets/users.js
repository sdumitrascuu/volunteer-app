const users = [
  {
    id: "volunteer1",
    role: "volunteer",
    email: "john.doe@example.com",
    password: "volunteer321",
    profile: {
      fullName: "John Doe",
      address1: "456 Random Lane",
      address2: "Apt 7B",
      city: "Austin",
      state: "TX",
      zip: "78701",
      skills: ["First Aid", "Teaching", "Cooking"],
      preferences: "Prefer morning shifts, comfortable with outdoor events.",
      availability: ["2025-07-10", "2025-07-17", "2025-07-24"]
    }
  },
  {
    id: "volunteer2",
    role: "volunteer",
    email: "jane.doe@example.com",
    password: "volunteer123",
    profile: {
      fullName: "Jane Doe",
      address1: "123 Whatever Street",
      address2: "",
      city: "Houston",
      state: "TX",
      zip: "77005",
      skills: ["Tutoring", "Driving"],
      preferences: "",
      availability: ["2025-07-05", "2025-07-12"]
    }
  },
  {
    id: "admin1",
    role: "admin",
    email: "ben.admin@example.com",
    password: "testing123"
  }
];

export default users;
