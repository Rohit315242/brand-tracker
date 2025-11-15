🚀 Brand Mention & Reputation Tracker

This project automatically tracks brand mentions from online public sources (such as Google News RSS), performs sentiment analysis, detects conversation spikes, and updates the dashboard LIVE using Socket.io.



📌 Table of Contents

Overview

Problem Statement

Features

Tech Stack

Architecture

Folder Structure

Environment Variables

Local Setup

Live Demo

Screenshots

Challenges & Solutions

Future Enhancements

Author



🧠 1. Overview

Marketing teams struggle to track what people say about their brand across news, blogs, social media, and the internet.
Negative or trending conversations often go unnoticed → delaying action.

Solution → A real-time brand monitoring system that:
✓ Collects mentions every 2 minutes
✓ Classifies sentiment
✓ Detects spikes
✓ Displays everything on a beautiful dashboard
✓ Updates instantly using Socket.io


🎯 2. Problem Statement

You must build a web application that helps marketing teams:

Track brand mentions across public online sources

Analyze sentiment (positive / neutral / negative)

Detect topic trends

Identify sudden conversation spikes

View insights in a real-time dashboard

This project solves all those requirements.


⭐ 3. Features
✅ Real-time brand mention tracking

Fetches latest brand mentions every 2 minutes using cron jobs.


✅ Sentiment analysis (AI-based)

Classifies mentions as positive, negative, neutral using sentiment.js.


✅ Real-time updates (Socket.io)

New mentions appear instantly on the frontend — no refresh needed.


✅ Spike alerts

Notifies major increases in mentions in last 24 hours.


✅ Clean & responsive UI

Built using React + TailwindCSS.



✅ Scalable backend

Node.js + Express + MongoDB + Cron jobs.

🛠 4. Tech Stack
Frontend

React + Vite

TailwindCSS

axios

socket.io-client

Backend

Node.js

Express

MongoDB (local or Atlas)

Mongoose

Socket.io

node-cron

rss-parser

sentiment

🏗 5. Architecture Diagram
       ┌───────────────┐
       │  Cron Jobs     │  (Every 2 minutes)
       └───────┬────────┘
               │ fetch RSS
               ▼
     ┌─────────────────────┐
     │   Node.js Backend   │
     ├─────────────────────┤
     │ Sentiment Analysis  │
     │ Store in MongoDB    │
     │ Emit via Socket.io  │
     └───────┬─────────────┘
             │ real-time
             ▼
     ┌─────────────────────┐
     │ React Frontend      │
     │ Live Dashboard       │
     └─────────────────────┘

📂 6. Folder Structure
brand-tracker/
│
├── backend/
│   ├── server.js
│   ├── .env
│   ├── config/db.js
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/fetchMentions.js
│   ├── sockets/mentionSocket.js
│   └── jobs/cronJobs.js
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md



🔑 7. Environment Variables

Create .env inside backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/brandTracker
FRONTEND_URL=http://localhost:5173
BRAND_QUERY=brand OR marketing OR AI OR business OR finance OR startup



🧪 8. Local Setup
Backend
cd backend
npm install
npm run dev

🧪Frontend
cd frontend
npm install
npm run dev


Frontend runs at:
👉 http://localhost:5173


Backend runs at:
👉 http://localhost:5000



🌐 9. Live Demo (Required for Submission)

Add your deployed links here:

Frontend Live Demo:  https://your-deployment-url.com
Backend API:         https://your-backend-url.com
Demo Video:          https://your-youtube-link.com
GitHub Repository:   https://github.com/yourname/brand-tracker



🖼 10. Screenshots

(Add screenshots of your dashboard here)

Sentiment Chart

Recent Mentions

Spike Alerts

Live Updates



🚧 11. Challenges & Solutions


1. Real-time updates not syncing

✔ Solved using Socket.io broadcast events.

2. RSS parsing blocking UI

✔ Added async cron + backend processing.

3. Too many duplicate articles

✔ Prevent duplicates using url filter.

4. Sentiment scoring inconsistency

✔ Combined title + description for accuracy.



🔮 12. Future Enhancements

Add Twitter / Reddit / YouTube scraping

Add topic clustering using NLP

Add multi-brand comparison dashboard

Add email alerts for negative spikes

Add real-time world map trends



👨‍💻 13. Author

Rohit Gavali
Full-Stack Developer
Built for Hackathon 2025 🚀