import express from 'express';
import UserController from '../controllers/UserController.js';
import pool from '../db.js';

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/getSession', UserController.getSession)
export default router;

