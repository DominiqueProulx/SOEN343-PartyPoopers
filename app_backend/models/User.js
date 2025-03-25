import pool from '../db.js';
import bcrypt from 'bcrypt';
class User {
    constructor(user_user_name, email, user_user_password) {
      this.user_name = user_name;
      this.email = email;
      this.user_password = user_password;
    }

    static async register(user_name, email, user_password) {
        try {
            const hashed_user_password = await bcrypt.hash(user_password, 10);
            const query = 'INSERT INTO app_user (user_name, email, user_password) VALUES ($1, $2, $3)';
            const values = [user_name, email, hashed_user_password];

            const result = await pool.query(query, values);
            return new User(result.rows[0].id, result.rows[0].user_name, result.rows[0].email);
        } catch (error) {
            throw new Error('Error registering user: ' + error.message);
        }
    }

}
  
export default User;