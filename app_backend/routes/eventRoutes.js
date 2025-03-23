import express from 'express';
import { Router } from 'express';
const router = Router();
import pool from '../db.js';
import FilteringController from '../controllers/FilteringController.js';

// Get a single event by ID
router.get('/:eid', async (req, res) => {
  try {
    const eventId = req.params.eid;
    const filteringController = FilteringController.getInstance();
    //const filteringController =  new FilteringController();
    const event = await filteringController.findSingleEvent(eventId);
    
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
  console.log('Inside the eventRoutes')
  try {
    const filterDetails = req.body;
   
    if (!filterDetails) {
      return res.status(400).json({ error: 'Missing filter details' });
    }
   
    const filteringController = FilteringController.getInstance();
   //const filteringController = new FilteringController();
    const events = await filteringController.getEvents(filterDetails);
   
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

export default router;