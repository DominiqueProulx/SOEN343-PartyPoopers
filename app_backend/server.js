const express = require('express');
const cors = require('cors')
const pool = require(('./db'))

const attendeeRoutes = require('./routes/attendeeRoutes');
const organizerRoutes = require('./routes/organizerRoutes');
const eventRoutes = require('./routes/eventRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const testRoutes = require('./routes/testRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/attendee', attendeeRoutes);
app.use('/api/organizer', organizerRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/test', testRoutes)

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
