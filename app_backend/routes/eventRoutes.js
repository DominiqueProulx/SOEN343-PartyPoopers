import { Router } from 'express';
const router = Router();
import Main_Controller from '../controllers/Main_Controller.js';

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

export default router;