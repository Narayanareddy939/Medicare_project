# doctor-appointment-system
A full-stack web application for managing doctor appointments with patient and admin dashboards.


# 🏥 Doctor Appointment System (MERN Stack)

## 📌 Overview

The Doctor Appointment System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables patients to book appointments with doctors, while doctors and administrators can manage schedules, appointments, and users efficiently.

This project demonstrates real-world full-stack development with REST APIs, authentication, and dynamic UI.

---

## 🚀 Features

### 👤 Patient Module

* User Registration & Login (JWT Authentication)
* Browse Doctors
* Book Appointments
* View & Manage Appointment History

### 👨‍⚕️ Doctor Module

* Doctor Login
* View Scheduled Appointments
* Update Availability
* Manage Patient Requests

### ⚙️ Admin Module

* Add / Remove Doctors
* View All Users
* Monitor Appointments

---

## 🛠 Tech Stack

### Frontend

* React.js
* HTML5, CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Other Tools

* JWT (Authentication)
* REST APIs
* Git & GitHub

---

## 📂 Project Structure

```id="mernstructure01"
doctor-appointment-system/
│
├── client/                # React Frontend
│   ├── src/
│   ├── public/
│
├── server/                # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│
├── screenshots/
├── README.md
├── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/doctor-appointment-system.git
cd doctor-appointment-system
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file in server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🔐 Authentication

* Secure login using JWT (JSON Web Tokens)
* Protected routes for patients, doctors, and admin

---

## 📡 API Endpoints (Sample)

```id="api01"
/api/auth/login
/api/auth/register
/api/doctors
/api/appointments
```

---

## 📸 Screenshots

*Add images of your UI here*

* Login Page
* Doctor List
* Appointment Booking
* Dashboard

---

## 🌐 Future Enhancements

* 💳 Online Payment Integration (Stripe)
* 📩 Email & SMS Notifications
* 📍 Real-time Doctor Availability
* 📱 Mobile App Version

---

## 🚀 Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 👨‍💻 Author

Lakshmi Narayana Reddy

---

## ⭐ Contribution

Feel free to fork this repo and contribute!
