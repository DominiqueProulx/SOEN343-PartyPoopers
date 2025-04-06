import pool from '../db.js';

import User_TDG from './TDG/User_TDG.js';
class User {
    constructor(user_name, email, user_password, gender = "M", FavoriteCategories = null) {
      this.user_name = user_name;
      this.email = email;
      this.user_password = user_password;
      this.gender = gender;
    }
    static copyConstructor(user) {
        return new User(user.user_name, user.email, user.user_password, user.gender, user.FavoriteCategories);
    }

    static async register(user_name, email, user_password, gender) {
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
    get_user_name() {
        return this.user_name;
    }
    get_email(){
        return this.email;
    }
    get_password(){
        return this.user_password;
    }

}
  
export default User;