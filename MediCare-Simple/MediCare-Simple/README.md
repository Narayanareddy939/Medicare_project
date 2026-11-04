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

## 🚀 Local Setup

Requirements: Node.js 18+ and a MongoDB Atlas cluster (or local MongoDB).

1. In `backend`, copy `.env.example` to `.env` and set `MONGODB_URI` to the current connection string copied from **Atlas → Connect → Drivers**. Do not reuse shard hostnames from an old URI. Replace the username and password; URL-encode special characters in the password. In MongoDB Atlas, create a database user and allow the backend host in **Network Access**. If the backend logs `ENOTFOUND`, recopy the URI and confirm the cluster is active; if it reports an IP access-list error, add the backend machine's IP in Atlas **Network Access**.
2. Start the backend:

   ```bash
   cd backend
   npm install
   npm start
   ```

   The API listens on `http://localhost:4000`. Check `http://localhost:4000/api/health` for the database connection status.

3. In a second terminal, start the frontend:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   Open `http://localhost:5173`. The Vite development proxy sends `/api` requests to the local backend.

## ☁️ Deploying

Deploy the backend and frontend as separate services. Do not put the MongoDB connection string in the frontend.

### Backend on Render

The repository root contains `render.yaml`. In Render, choose **New → Blueprint** and select this repository. The Blueprint creates the backend web service with its root directory, build/start commands, and `/api/health` check already configured.

When prompted for the Blueprint's secret environment variables, enter:
  - `MONGODB_URI`: your MongoDB Atlas connection string (keep it private)
  - `ADMIN_EMAIL` and `ADMIN_PASSWORD`: credentials for the initial admin account
  - `CORS_ORIGINS`: your Vercel site origin, e.g. `https://your-app.vercel.app` (comma-separate additional origins)

Do not set `PORT` to the Vercel URL. Render assigns a numeric `PORT` automatically. If you manually added `PORT=https://...` in the Render dashboard, delete that variable and put the Vercel origin in `CORS_ORIGINS` instead.

`MONGODB_DB` defaults to `medicare`. To use another database, change the value in `render.yaml`.

In Atlas, add the Render service's **Outbound IP Addresses** (shown in the Render service settings) to **Security → Network Access**. If the Render connection times out but the same URI works locally, this IP allowlist is the first thing to check. For a quick connectivity test only, Atlas can temporarily allow `0.0.0.0/0`; remove that broad rule afterward and allow the Render outbound ranges instead. After deployment, verify `https://your-render-service.onrender.com/api/health`.

### Frontend on Vercel

The Vercel SPA rewrite config is at `MediCare-Simple/MediCare-Simple/frontend/vercel.json`. Import the repository into Vercel and set the project root directory to `MediCare-Simple/MediCare-Simple/frontend`. Use the Vite defaults (`npm run build`, output directory `dist`) and add this build-time environment variable:

- `VITE_API_URL`: the Render backend origin, e.g. `https://your-render-service.onrender.com` (no trailing slash or `/api`)

Redeploy after changing environment variables. Add the final Vercel origin to the Render `CORS_ORIGINS` value.

## 🔒 Default Admin Credentials

If no admin exists when the backend starts, an admin is seeded. For local development the defaults are:
- **Email:** `admin@medicare.com`
- **Password:** `123` *(Note: Real sign-ups enforce strong password policies)*

Set `ADMIN_EMAIL` and a strong `ADMIN_PASSWORD` in Render before connecting a new production database.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Designed and developed for seamless healthcare operations.* 💙
