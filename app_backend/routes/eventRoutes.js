const express = require('express');
const router = express.Router();
const pool = require('../db'); 
const FilteringController = require('../controllers/filtering_controller');

router.post('/', async (req, res) => {
    try {
      // Get filter details from request body
      const filterDetails = req.body;
      
      // Validate the filter details if needed
      if (!filterDetails) {
        return res.status(400).json({ error: 'Missing filter details' });
      }
      
      // Get the filtering controller instance
      const filteringController = FilteringController.getInstance();
      
      // Get filtered events
      const events = await filteringController.getEvents(filterDetails);
      
      // Send back the response
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
  
  module.exports = router;