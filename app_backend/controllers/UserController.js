import User from '../models/User.js';
import pool from '../db.js'

class UserController{

    async register(req, res) {
        try {
            const {user_name, email, user_password} = req.body;
            if(!user_name || !email || !user_password) {
                return res.status(400).json({message: "Missing user_name, email or user_password"})
            }
            const newUser = await User.register(user_name, email, user_password);
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        }
        catch(err) {
            res.status(500).json({ message: err.message });
        }
    }
    async login(req, res) {
        try {
            const {email, user_password} = req.body;
            const user = await User.login(email, user_password);
            res.status(201).json({message: 'User login successfully'})
        }
        catch (err){
            res.status(500).json({ message: err.message });
        }
    }

}
export default new UserController();