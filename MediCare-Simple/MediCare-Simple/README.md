# MediCare Simple - Hospital Management System 🏥

**MediCare Simple** is a full-stack Hospital Management System designed to handle patient registrations, doctor availability, appointment scheduling, and admin oversight with ease and modern styling.

![MediCare Simple Preview](https://via.placeholder.com/1200x600.png?text=MediCare+Simple+-+Your+Trusted+Healthcare+System)

## ✨ Features

- **User Authentication**: Secure role-based login for Patients, Doctors, and Admins.
- **Doctor Portal**: Doctors can manage their availability and view upcoming appointments.
- **Patient Dashboard**: Patients can browse doctors by specialization and book available time slots.
- **Admin Oversight**: Comprehensive tools to add, manage, or remove doctor profiles.
- **Real-time Availability**: Prevents double-booking for the exact same date, time, and doctor.
- **Responsive Layout**: Designed explicitly with dynamic components ensuring mobile responsiveness.

## 🛠️ Technology Stack

- **Frontend**: React, Vite, core CSS (Dynamic UI design)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)

## 🚀 Getting Started

Follow these steps to run the MediCare Simple application locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [MongoDB](https://www.mongodb.com/) (Running locally or configured via a connection string)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

### 2. Backend Setup

Open a terminal and navigate to the `backend` directory.

```bash
cd backend
npm install
npm start
```

*The backend server will run on `http://localhost:4000`.*
*Note: Ensure your local MongoDB instance is active on port `27017`.*

### 3. Frontend Setup

Open a **second** terminal and navigate to the `frontend` directory.

```bash
cd frontend
npm install
npm run dev
```

*The frontend application will typically be accessible at `http://localhost:5173`.*

## 🔒 Default Admin Credentials

Upon the first backend launch, a default admin is seeded automatically:
- **Email:** `admin@medicare.com`
- **Password:** `123` *(Note: Real sign-ups enforce strong password policies)*

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Designed and developed for seamless healthcare operations.* 💙
