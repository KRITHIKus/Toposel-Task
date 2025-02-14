# 🛠 USER-API: Express.js, MongoDB & JWT Authentication

A simple user management API built with **Express.js**, **MongoDB**, and **JWT Authentication**.  
This API allows users to **register, login, and search for users** using **Postman** for testing.

## 🚀 Features
- User **Registration** with validation
- Secure **Login** with password hashing
- **JWT Authentication** for protected routes
- **Search User** by `username` or `email`
- Proper **error handling** and **data validation**
- Organized folder structure for scalability

---

## 📂 Project Structure
```
USER-API/
│-- node_modules/  
│-- routes/  
│   ├── authRoutes.js  
│   ├── userRoutes.js  
│-- controllers/  
│   ├── authController.js  
│   ├── userController.js  
│-- middleware/  
│   ├── authMiddleware.js  
│-- models/  
│   ├── User.js  
│-- config/  
│   ├── db.js  
│-- server.js  
│-- package.json  
│-- .env  
│-- README.md  
```

---

## ⚙️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/USER-API.git
cd USER-API
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### **4️⃣ Start the Server**
```sh
npm start
```
or with **nodemon**:
```sh
npm run dev
```
Server runs on: `http://localhost:5000`

---

## 📌 API Endpoints
### **🔹 1. Register a New User**
**Endpoint:** `POST /api/auth/register`  
**Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "mypassword",
  "fullName": "John Doe",
  "gender": "Male",
  "dob": "1998-05-12",
  "country": "USA"
}
```
**Response:**
```json
{
  "message": "User registered successfully!"
}
```

---

### **🔹 2. Login User**
**Endpoint:** `POST /api/auth/login`  
**Body:**
```json
{
  "username": "john_doe",
  "password": "mypassword"
}
```
**Response:**
```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

---

### **🔹 3. Search User (Requires Auth)**
**Endpoint:** `GET /api/auth/search?query=john@example.com`  
**Headers:**
```
Authorization: Bearer your_jwt_token
```
**Response:**
```json
{
  "message": "User found",
  "user": {
    "username": "john_doe",
    "email": "john@example.com",
    "fullName": "John Doe",
    "gender": "Male",
    "dob": "1998-05-12",
    "country": "USA"
  }
}
```

---

## 🔐 Authentication & Security
- **JWT (JSON Web Tokens)** is used for authentication.
- Passwords are securely **hashed** using **bcryptjs**.
- **Protected Routes** require an `Authorization` header with a **valid JWT token**.

---

## 🛠 Technologies Used
- **Node.js** + **Express.js** (Backend)
- **MongoDB** + **Mongoose** (Database)
- **JWT** (Authentication)
- **bcryptjs** (Password Hashing)
- **dotenv** (Environment Variables)
- **Postman** (API Testing)

---

## 📌 API Documentation
For detailed API testing, refer to the **Postman API Documentation**:  
📄 **Postman API Docs:** [https://documenter.getpostman.com/view/40653853/2sAYXECcpX](#)

---

## 🔗 Portfolio
Check out more projects on my portfolio:  
🌐 **Portfolio:** [https://krithik.onrender.com/](#)

---

## 📌 Run API Tests in Postman
1. **Open Postman** and create a **new request**.
2. Use the provided **API Endpoints** above.
3. Add the **Authorization Header** (`Bearer <token>`) where required.
4. Send requests and verify responses.
