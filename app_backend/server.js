import express from "express";
import cors from "cors";
import session from "express-session";
import pool from "./db.js";
import attendeeRoutes from "./routes/attendeeRoutes.js";
import organizerRoutes from "./routes/organizerRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import path from 'path';
import Event_Catalog from './controllers/Event_Catalog.js'

const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      sameSite: "lax", // Important for cross-site cookie handling
      maxAge: 1000 * 60 * 60 * 24, // Session cookie lasts 1 day
    },
  })
);

// mount the routes
app.use('/api/attendee', attendeeRoutes);
app.use('/api/organizer', organizerRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/test', testRoutes);
app.use('/uploads', express.static(path.resolve('./uploads')));

// Load existing events into memory at startup
Event_Catalog.getInstance().loadEventsFromDatabase()
  .then(() => console.log('Events loaded from DB'))
  .catch(err => console.error('Failed to load events:', err))

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
