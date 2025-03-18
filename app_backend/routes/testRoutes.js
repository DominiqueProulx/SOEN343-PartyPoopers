const express = require('express');
const router = express.Router();
const pool = require('../db'); 

router.get('/test2', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM test2');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;
