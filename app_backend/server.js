import express from 'express';
import cors from 'cors';
import pool from './db.js';
import attendeeRoutes from './routes/attendeeRoutes.js';
import organizerRoutes from './routes/organizerRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import testRoutes from './routes/testRoutes.js';
import path from 'path';
import Event_Catalog from './controllers/Event_Catalog.js'

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


