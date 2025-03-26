import pool from '../db.js';

import User_TDG from '../components/TDG/User_TDG.js';
class User {
    constructor(user_name, email, user_password) {
      this.user_name = user_name;
      this.email = email;
      this.user_password = user_password;
    }
    constructor(user) {
        
    }

    static async register(user_name, email, user_password) {
        try {
            return await User_TDG.createUser(user_name, email, user_password);
        }
        catch(err) {
            throw err;
        }
    }

    static async login(email, user_password) {
        try {
            return await User_TDG.loginUser(email, user_password);
        }
        catch (error) {
            throw error;
        }
    }

}
  
export default User;