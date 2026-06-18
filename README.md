# City Women's Hospital 🏥

A full-stack hospital website built with the MERN stack, featuring online appointment booking and an admin dashboard to manage them — built as a hands-on project to learn MongoDB, Express, React, and Node.js end-to-end, from local development through production deployment.

**Live site:** [genec-hospital.vercel.app](https://genec-hospital.vercel.app)
**Backend API:** [genec-hospital-api.onrender.com](https://genec-hospital-api.onrender.com)

---

## Overview

City Women's Hospital is a fictional hospital site for **Dr. Priya Sharma**, based in Ahmedabad. It includes a marketing-style public site (Home, About, Services, Gallery, Contact) plus a real working appointment booking flow backed by a database, and a password-protected admin panel where the hospital staff can view, search, filter, and update the status of incoming appointments.

## Features

- 📅 **Appointment booking** — patients can book an appointment directly from the homepage; the request is saved to MongoDB and instantly available to admins
- 🔐 **Admin panel** — simple password-gated dashboard to view all appointments, search by name/phone/service, filter by status, and update status (pending → confirmed/cancelled)
- 📱 **Fully responsive** — custom `useIsMobile` hook drives mobile-specific layouts across every page, including a card-based mobile view for the admin table
- ✨ **Smooth UX touches** — fade-up page transitions on route change, scroll-to-top on navigation
- 🎨 **Custom theme** — navy blue and coral color palette, minimal and clean design throughout

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Hosting | Vercel (frontend) · Render (backend) |
| HTTP client | Axios |

## Project structure

```
genec-hospital/
├── backend/
│   ├── config/db.js
│   ├── controllers/appointmentController.js
│   ├── models/appointmentModel.js
│   ├── routes/appointmentRoutes.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── pages/        # Home, About, Services, Gallery, Contact, AdminPanel
    │   ├── components/   # Navbar, Footer
    │   ├── useIsMobile.js
    │   ├── App.jsx
    │   └── index.css
    └── package.json
```

## Running locally

**Backend:**
```bash
cd backend
npm install
```
Create a `.env` file in `backend/`:
```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```
```bash
npm start
```

**Frontend:**
```bash
cd frontend
npm install
```
Create a `.env` file in `frontend/`:
```
VITE_API_URL=http://localhost:5000
```
```bash
npm run dev
```

The frontend reads `VITE_API_URL` to know where the backend lives — locally it points at `localhost:5000`; in production it's set to the deployed Render URL via Vercel's environment variables.

## What I learned

This project was as much about debugging a real deployed app as it was about building one. A few specific things this taught me:

- **Environment-aware API URLs** — hardcoding `localhost:5000` in fetch calls works fine in local dev but silently breaks the live site for anyone not on the same machine (e.g. mobile users). Fixed by routing all API calls through a `VITE_API_URL` environment variable with a safe production fallback.
- **CORS configuration** for a frontend and backend deployed on different domains (Vercel + Render).
- **Responsive layout pitfalls** — a single hardcoded-grid component (the footer) without a mobile breakpoint caused a horizontal overflow bug across the *entire* site, not just that component.
- **Diagnosing "it works on my machine"-style bugs** by checking the raw API response directly, then the database itself, rather than guessing from the frontend symptom alone.

## Author

Built by Hemang as part of a self-directed MERN stack learning project.
