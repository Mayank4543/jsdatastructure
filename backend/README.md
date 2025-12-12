# Learning Platform Backend API

Backend server for the Learning Platform with user authentication using Express, MongoDB, and JWT.

## Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing with bcrypt
- Protected Routes
- MongoDB Database
- CORS enabled

## Installation

1. Install dependencies:
```bash
cd backend
npm install
```

2. Configure environment variables:
- Copy `.env.example` to `.env`
- Update MongoDB URI and JWT secret

3. Make sure MongoDB is running locally or use MongoDB Atlas

## Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication Routes

#### 1. Register User
- **URL:** `POST /api/auth/register`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "jwt_token_here"
  }
}
```

#### 2. Login User
- **URL:** `POST /api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "jwt_token_here"
  }
}
```

#### 3. Get Current User (Protected)
- **URL:** `GET /api/auth/me`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### 4. Logout User (Protected)
- **URL:** `POST /api/auth/logout`
- **Headers:** `Authorization: Bearer <token>`
- **Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   └── authController.js  # Authentication logic
├── middleware/
│   └── auth.js           # JWT authentication middleware
├── models/
│   └── User.js           # User model
├── routes/
│   └── auth.js           # Auth routes
├── utils/
│   └── jwt.js            # JWT utilities
├── .env                  # Environment variables
├── .env.example          # Example env file
├── .gitignore
├── package.json
├── server.js             # Main server file
└── README.md
```

## Testing with Postman or Thunder Client

1. **Register a new user:**
   - Method: POST
   - URL: http://localhost:5000/api/auth/register
   - Body: JSON with name, email, password

2. **Login:**
   - Method: POST
   - URL: http://localhost:5000/api/auth/login
   - Body: JSON with email, password

3. **Get current user (requires token):**
   - Method: GET
   - URL: http://localhost:5000/api/auth/me
   - Headers: Authorization: Bearer YOUR_TOKEN_HERE

## Environment Variables

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/learning-platform
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
NODE_ENV=development
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Environment variables
- **cors**: Cross-origin resource sharing
- **express-validator**: Input validation

## Security Features

- Passwords are hashed using bcrypt before storing
- JWT tokens for stateless authentication
- Password field is excluded by default in queries
- Input validation on all routes
- CORS enabled for frontend communication
