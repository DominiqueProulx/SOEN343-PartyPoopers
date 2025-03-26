const pool = require('../db.js');  // PostgreSQL client

class User_TDG {
    async getAllUsers() {
        const query = 'SELECT * FROM users';
        try {
            const res = await pool.query(query);
            return res.rows;
        } catch (err) {
            console.error('Error fetching users:', err);
            throw err;
        }
    }

    async getUserByUid(uid) {
        const query = 'SELECT * FROM users WHERE uid = $1';
        try {
            const res = await pool.query(query, [uid]);
            return res.rows[0]; 
        } catch (err) {
            console.error('Error fetching user by uid:', err);
            throw err;
        }
    }

    async getUserByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        try {
            const res = await pool.query(query, [email]);
            return res.rows[0]; 
        } catch (err) {
            console.error('Error fetching user by uid:', err);
            throw err;
        }
    }

    async createUser(user_name, email, user_password) {
        const query = 'INSERT INTO users (user_name, email, user_password) VALUES ($1, $2, $3) RETURNING *';
        try {
            const res = await pool.query(query, [user_name, email, user_password]);
            return res.rows[0];
        } catch (err) {
            console.error('Error creating user:', err);
            throw err;
        }
    }
    async updateUser(uid, user_name, email, user_password) {
        const query = 'UPDATE users SET user_name = $1, email = $2, user_password = $3 WHERE uid = $4 RETURNING *';
        try {
            const res = await pool.query(query, [user_name, email, user_password ,uid]);
            return res.rows[0];
        } catch (err) {
            console.error('Error updating user:', err);
            throw err;
        }
    }
    async deleteUserByEmail(email) {
        const query = 'DELETE FROM users WHERE email = $1 RETURNING *';
        try {
            const res = await pool.query(query, [email]);
            return res.rows[0]; // Return the deleted user
        } catch (err) {
            console.error('Error deleting user:', err);
            throw err;
        }
    }

    async deleteUserByUid(uid) {
        const query = 'DELETE FROM users WHERE uid = $1 RETURNING *';
        try {
            const res = await pool.query(query, [uid]);
            return res.rows[0]; // Return the deleted user
        } catch (err) {
            console.error('Error deleting user:', err);
            throw err;
        }
    }
}

module.exports = new UserTableGateway();