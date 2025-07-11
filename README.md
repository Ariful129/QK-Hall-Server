# QK Hall Management System

A comprehensive hall management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for efficient management of residential halls, student accommodations, and facility operations.

## 🚀 Live Demo

**Frontend:** [https://qk-hall.web.app/](https://qk-hall.web.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Student Management**: Registration, profile management, and room assignments
- **Room Management**: Room allocation, availability tracking, and maintenance records
- **Facility Management**: Common area bookings, facility maintenance, and usage tracking
- **Fee Management**: Payment tracking, fee collection, and financial reporting
- **Admin Dashboard**: Comprehensive administrative controls and analytics
- **Real-time Notifications**: Instant updates for important announcements
- **Responsive Design**: Mobile-friendly interface for all devices
- **Secure Authentication**: JWT-based authentication system

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT Authentication
- bcrypt for password hashing

**Frontend:**
- React.js
- Firebase (Hosting)
- HTML5 & CSS3
- JavaScript (ES6+)

**Database:**
- MongoDB Atlas

**Deployment:**
- Firebase Hosting (Frontend)
- Backend deployment platform (versel)

## 📦 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas account)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ariful129/QK-Hall-Server.git
   cd QK-Hall-Server
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies** (if frontend is in the same repo)
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

5. **Start the development servers**
   
   For backend:
   ```bash
   npm start
   # or for development with nodemon
   npm run dev
   ```

   For frontend (if separate):
   ```bash
   cd client
   npm start
   ```

## 🌐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/qk-hall

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d

# Firebase Configuration (if using Firebase for additional services)
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
```

## 🎯 Usage

1. **Access the application**
   - Frontend: [https://qk-hall.web.app/](https://qk-hall.web.app/)
   - Backend API: `http://localhost:5000` (local development)

2. **Admin Access**
   - Register as an admin or use seeded admin credentials
   - Access the admin dashboard to manage halls, rooms, and students

3. **Student Access**
   - Students can register and log in to view their room assignments
   - Access facility booking and payment information

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Hall Management
- `GET /api/halls` - Get all halls
- `POST /api/halls` - Create new hall
- `PUT /api/halls/:id` - Update hall information
- `DELETE /api/halls/:id` - Delete hall

### Room Management
- `GET /api/rooms` - Get all rooms
- `POST /api/rooms` - Create new room
- `PUT /api/rooms/:id` - Update room information
- `DELETE /api/rooms/:id` - Delete room

### Student Management
- `GET /api/students` - Get all students
- `POST /api/students` - Add new student
- `PUT /api/students/:id` - Update student information
- `DELETE /api/students/:id` - Remove student

## 📁 Project Structure

```
QK-Hall-Server/
├── node_modules/
├── pdf/                    # PDF documents and reports
├── index.js               # Main server file
├── package.json           # Backend dependencies
├── package-lock.json      # Lock file for dependencies
├── vercel.json           # Vercel deployment configuration
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ariful Islam**
- GitHub: [@Ariful129](https://github.com/Ariful129)
- Email: [your-email@example.com](arif.cuet129@gmail.com)




---

⭐ Star this repository if you find it helpful!
