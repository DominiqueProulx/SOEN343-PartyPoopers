const express = require('express');
const cors = require('cors')
const pool = require(('./db'))

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/attendee', attendeeRoutes);
app.use('/api/organizer', organizerRoutes);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });