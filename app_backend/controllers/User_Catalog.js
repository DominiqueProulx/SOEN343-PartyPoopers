import User from '../models/User.js';
import pool from '../db.js'
import Attendee_Catalog from './Attendee_Catalog.js';
class User_Catalog{

    async register(req, res) {
        console.log(req.body);
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
            req.session.user = user;

            res.status(201).json({message: 'User login successfully', user: user})
        }
        catch (err){
            res.status(500).json({ message: err.message });
        }
    }
    async getCurrentUser(req, res) {
        try {
            res.status(201).json({message: "User logged in", user:req.session.user})
        }
        catch(err) {
            res.status(500).json({message: err.message})
        }
    }


}
export default new User_Catalog;