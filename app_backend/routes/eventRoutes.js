import { Router } from 'express';
const router = Router();
import Main_Controller from '../controllers/Main_Controller.js';
import multer from 'multer'; // npm install multer
import path from 'path';
import fs from 'fs';
import pool from '../db.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Creating a new event
router.post('/create', async (req, res) => {
  try {
    const eventData = req.body;
    const mainController = Main_Controller.getInstance();
    const result = await mainController.createEvent(eventData);
    const eid = result.eid;

    // Insert sponsor & speaker infos into event_detail
    const { sponsor_infos, speaker_infos } = eventData;

    if (sponsor_infos || speaker_infos) {
      await pool.query(
        'INSERT INTO event_detail (eid, sponsor_infos, speaker_infos) VALUES ($1, $2, $3)',
        [eid, sponsor_infos || '', speaker_infos || '']
      );
    }

    res.status(201).json({
      success: true,
      data: { eid },
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while creating event',
      message: error.message,
    });
  }
});

// Upload banner image for an event
router.post('/upload/:eid', upload.single('banner'), async (req, res) => {
  const { eid } = req.params;
  const filePath = req.file?.path;

  if (!filePath) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    await pool.query(
      'INSERT INTO promotional_content (eid, file_path) VALUES ($1, $2)',
      [eid, filePath]
    );
    res.status(200).json({ success: true, message: 'Banner uploaded successfully', filePath });
  } catch (error) {
    console.error('Banner upload failed:', error);
    res.status(500).json({ success: false, error: 'Database error during banner upload' });
  }
});

// Add an agenda item to an event
router.post('/agenda/:eid', async (req, res) => {
  const { eid } = req.params;
  const { time, topic } = req.body;

  if (!time || !topic) {
    return res.status(400).json({ error: 'Missing agenda item time or topic' });
  }

  try {
    await pool.query(
      'INSERT INTO event_agenda (eid, time_slot, topic) VALUES ($1, $2, $3)',
      [eid, time, topic]
    );
    res.status(201).json({ success: true, message: 'Agenda item added' });
  } catch (error) {
    console.error('Agenda item insertion failed:', error);
    res.status(500).json({ success: false, error: 'Failed to insert agenda item' });
  }
});


// Get a single event by ID
router.get('/:eid', async (req, res) => {
  try {
    const eventId = req.params.eid;
    const mainController = Main_Controller.getInstance();
   const event = await mainController.findSingleEvent(eventId);
  
    
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Error finding event:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while finding event',
      message: error.message
    });
  }
});

// Filter events
router.post('/filter', async (req, res) => {
  try {
    const filterDetails = req.body;
   
    if (!filterDetails) {
      return res.status(400).json({ error: 'Missing filter details' });
    }
   
    const mainController = Main_Controller.getInstance();
   //const events = await filteringController.getEvents(filterDetails);
   const events = await mainController.browseEvents(filterDetails);

    res.json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    console.error('Error in filtering events:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while filtering events',
      message: error.message
    });
  }
});

// Get all agenda items for a given event
router.get('/agenda/:eid', async (req, res) => {
  const { eid } = req.params;

  try {
    const result = await pool.query(
      'SELECT time_slot, topic FROM event_agenda WHERE eid = $1 ORDER BY time_slot ASC',
      [eid]
    );

    res.status(200).json({
      success: true,
      agenda: result.rows,
    });
  } catch (error) {
    console.error('Failed to fetch agenda:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while retrieving agenda items',
    });
  }
});

// Get sponsor and speaker info for an event
router.get('/details/:eid', async (req, res) => {
  const { eid } = req.params;

  try {
    const result = await pool.query(
      'SELECT sponsor_infos, speaker_infos FROM event_detail WHERE eid = $1',
      [eid]
    );

    res.status(200).json({
      success: true,
      details: result.rows[0] || {}
    });
  } catch (error) {
    console.error('Error fetching event details:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve event details'
    });
  }
});

export default router;
