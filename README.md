Basic Activity Booking App - Backend API

This is a simple REST API backend for a Basic Activity Booking App, developed as part of a backend internship assignment. It allows users to register, login, view available activities, book them, and check their bookings.

🛠 Tech Stack

Backend: Node.js + Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Tokens)

Password Hashing: bcryptjs

Validation: express-validator

📦 Features

User Registration & Login with secure password storage and token-based authentication

Public Activity Listing (no auth required)

Authenticated Booking of activities

Authenticated Retrieval of user bookings

🚀 Getting Started

Prerequisites

Node.js installed

MongoDB Atlas or local MongoDB setup

Setup Instructions

# Clone the repo
git clone https://github.com/your-username/activity-booking-app.git
cd activity-booking-app

# Install dependencies
npm install

# Create a .env file
cp .env.example .env

# Fill in the .env with your values
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Start the server
npm start


📬 API Endpoints

Auth

POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive JWT token

POST /api/auth/logout – Logout (clear token)

Activities

GET /api/activities – Public: List all activities

POST /api/activities/create – Protected: Create activity (auto date/time)

POST /api/activities/book/:id – Protected: Book an activity by ID

GET /api/activities/my-bookings – Protected: Get logged-in user's bookings

🧪 API Testing

Use the provided Postman collection to test endpoints:

Download Postman Collection

Or import it manually into Postman after exporting it via the app.

✅ Bonus Features Implemented

Password hashing using bcryptjs

Input validation using express-validator

Clean code with MVC structure

JWT-based auth with protected routes

