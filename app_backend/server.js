import express from 'express';
import cors from 'cors';
import session from 'express-session'
import pool from './db.js';
import attendeeRoutes from './routes/attendeeRoutes.js';
import organizerRoutes from './routes/organizerRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import userRoutes from './routes/userRoutes.js';
import testRoutes from './routes/testRoutes.js';

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
    secret: 'your_secret_key', 
    resave: false,           
    saveUninitialized: true,   
    cookie: {
      secure: false,  // Set to true if using HTTPS
      httpOnly: true,
      sameSite: "lax",  // Important for cross-site cookie handling
      maxAge: 1000 * 60 * 60 * 24, // Session cookie lasts 1 day
    }
  })
);


<<<<<<< HEAD
<<<<<<< HEAD
app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
=======
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
>>>>>>> dee2d54ccb72410597e7eb3987582f9fab80ef31
=======
// mount the routes
app.use('/api/attendee', attendeeRoutes);
app.use('/api/organizer', organizerRoutes);
app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/test', testRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
>>>>>>> parent of a0625f8 (Changed port to 5001 because 5000 is already in use on macs. Added db.js to gitignore for security reasons)
