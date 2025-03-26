import express from 'express';
import User_Catalog from '../controllers/User_Catalog.js';
import pool from '../db.js';

const router = express.Router();

router.post('/register', User_Catalog.register);
router.post('/login', User_Catalog.login);
router.get('/getCurrentUser', User_Catalog.getCurrentUser)
export default router;

