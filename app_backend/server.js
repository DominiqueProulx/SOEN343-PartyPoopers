import express from 'express';
import cors from 'cors';
import pool from './db.js';
import attendeeRoutes from './routes/attendeeRoutes.js';
import organizerRoutes from './routes/organizerRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import testRoutes from './routes/testRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// mount the routes
app.use('/api/attendee', attendeeRoutes);
app.use('/api/organizer', organizerRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/test', testRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});