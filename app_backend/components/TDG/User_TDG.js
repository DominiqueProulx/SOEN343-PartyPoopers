import pool from "../../db.js"
class User_TDG {
    

    async getAllUsers() {
        const query = 'SELECT * FROM app_user';
        try {
            const res = await pool.query(query);
            return res.rows;
        } catch (err) {
            console.error('Error fetching app_user:', err);
            throw err;
        }
    }

    async getUserByUid(uid) {
        const query = 'SELECT * FROM app_user WHERE uid = $1';
        try {
            const res = await pool.query(query, [uid]);
            return res.rows[0]; 
        } catch (err) {
            console.error('Error fetching user by uid:', err);
            throw err;
        }
    }

    async getUserByEmail(email) {
        const query = 'SELECT * FROM app_user WHERE email = $1';
        try {
            const res = await pool.query(query, [email]);
            return res.rows[0]; 
        } catch (err) {
            console.error('Error fetching user by uid:', err);
            throw err;
        }
    }

    async createUser(user_name, email, user_password) {
        const query = 'INSERT INTO app_user (user_name, email, user_password) VALUES ($1, $2, $3) RETURNING *';
        try {
            const res = await pool.query(query, [user_name, email, user_password]);
            console.log("Creating user in db", res.rows[0]);
            return res.rows[0];
        } catch (err) {
            console.error('Error creating user:', err);
            throw err;
        }
    }
    async updateUser(uid, user_name, email, user_password) {
        const query = 'UPDATE app_user SET user_name = $1, email = $2, user_password = $3 WHERE uid = $4 RETURNING *';
        try {
            const res = await pool.query(query, [user_name, email, user_password ,uid]);
            return res.rows[0];
        } catch (err) {
            console.error('Error updating user:', err);
            throw err;
        }
    }
   
    async updatePreferences(uid, loggedUserId, favorites) {
        try {
          // Validate uid is a valid integer
          const userId = parseInt(uid);
          if (isNaN(userId)) {
            throw new Error(`Invalid user ID: ${uid}`);
          }
          
          // Ensure favorites is an array of strings and not undefined
          const favoritesArray = Array.isArray(favorites) 
            ? favorites.filter(item => item !== undefined && item !== null)
                    .map(item => String(item)) 
            : [];
          
          console.log(`Updating preferences for user ${userId}`);
          console.log(`Favorites array: ${JSON.stringify(favoritesArray)}`);
          
          // Use a parameterized query
          const query = `
            UPDATE app_user
            SET favorites = $2::category[]
            WHERE uid = $1
            RETURNING *
          `;
          
          // Pass the validated userId and favoritesArray
          const result = await pool.query(query, [userId, favoritesArray]);
          
          if (result.rows.length === 0) {
            throw new Error(`User with ID ${userId} not found`);
          }
          
          return result.rows[0];
        } catch (error) {
          console.error('Error updating user preferences:', error);
          throw error;
        }
      }
    async deleteUserByEmail(email) {
        const query = 'DELETE FROM app_user WHERE email = $1 RETURNING *';
        try {
            const res = await pool.query(query, [email]);
            return res.rows[0]; 
        } catch (err) {
            console.error('Error deleting user:', err);
            throw err;
        }
    }

    async deleteUserByUid(uid) {
        const query = 'DELETE FROM app_user WHERE uid = $1 RETURNING *';
        try {
            const res = await pool.query(query, [uid]);
            return res.rows[0]; 
        } catch (err) {
            console.error('Error deleting user:', err);
            throw err;
        }
    }

    async loginUser(email, user_password) {
        try {
            const query = 'SELECT * FROM app_user WHERE email = $1';
            const result = await pool.query(query, [email]);
            if (result.rows.length === 0) {
                throw new Error('User not found');
            }
            const user = result.rows[0];
            console.log("Validating user login", user);
            if (user_password != user.user_password) {
                throw new Error('Incorrect password');
            }
            return user;
        }
        catch (error) {
            throw new Error('Error logging in: ' + error.message);
        }
    }
}

export default new User_TDG();