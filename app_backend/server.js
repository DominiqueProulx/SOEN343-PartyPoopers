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
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: 'your_secret_key', 
    resave: false,           
    saveUninitialized: true,   
    cookie: { secure: false }  
  })
);


// mount the routes
app.use('/api/attendee', attendeeRoutes);
app.use('/api/organizer', organizerRoutes);
app.use('/api/user', userRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/test', testRoutes);

app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});