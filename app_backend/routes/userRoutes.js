import express from 'express';
import User_Catalog from '../controllers/User_Catalog.js';
import Attendee_Catalog from '../controllers/Attendee_Catalog.js';
import pool from '../db.js';
import Main_Controller from '../controllers/Main_Controller.js';

const router = express.Router();

router.post('/register', User_Catalog.register);
router.post('/login', User_Catalog.login);
router.get('/getCurrentUser', User_Catalog.getCurrentUser);
router.post('/logout', User_Catalog.logout);
router.get('/all', User_Catalog.getAllUser);
router.get('/recommended', async (req, res) => {
    const user = req.session.user;
    console.log(user);
    try {
      const result = await pool.query(
        `SELECT e.*
         FROM app_event e, app_user u
         WHERE u.uid = $1
         AND e.event_category = ANY(u.favorites)`,
        [user.uid]
      );
      
      res.status(200).json({success: true, events: result.rows});
    }
    catch (err) {
      console.error('Error fetching recommended events:', err);
      res.status(500).json({success: false, message: 'Failed to fetch recommended events'});
    }
  });

router.put('/updatePref/:id', async (req, res) => {
    try {
      const uid = req.params.id;
      // Validate uid
      if (!uid) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
      }
      
      //const loggedUserId = req.user ? req.user.id : null;  // TODO:  Uncomment this when login works
      const loggedUserId = uid; // THIS IS FOR TESTING
      // const favorites = Array.isArray(req.body.favorites) ? req.body.favorites : [];
      const str = req.body.favorites;
      const cleanedStr = str.replace(/[{}]/g, '');
      const favorites = cleanedStr.split(',').map(item => item.trim());


      const mainController = Main_Controller.getInstance();
      const result = await mainController.updatePreferences(uid, loggedUserId, favorites);
      
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.error('Error updating preferences:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
export default router;

