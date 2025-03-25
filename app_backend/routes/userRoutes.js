import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/test', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM app_event');
        res.json(result.rows);
    }
    catch(err) {
        console.err(err)
    }
});

export default router;

