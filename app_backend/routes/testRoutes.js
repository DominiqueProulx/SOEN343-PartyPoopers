import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/test2', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM app_event');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;