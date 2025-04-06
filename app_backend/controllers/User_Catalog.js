import User from '../components/User.js';
import pool from '../db.js'
import Attendee_Catalog from './Attendee_Catalog.js';
import User_TDG from '../components/TDG/User_TDG.js';
import session from 'express-session';
import User_Manager from './User_Manager.js';

class User_Catalog extends User_Manager {
    static instance = null;
    
    // Proper singleton pattern implementation
    static getInstance() {
        if (!User_Catalog.instance) {
            User_Catalog.instance = new User_Catalog();
        }
        return User_Catalog.instance;
    }
    
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
            req.session.save((err) => {});
            console.log(req.session.user)
            res.status(201).json({message: 'User login successfully', user: user})
        }
        catch (err){
            res.status(500).json({ message: err.message });
        }
    }
    
    async getCurrentUser(req, res) {
        try {
            console.log(req.session)
            if(req.session.user) {
                res.status(201).json({message: "User logged in", user:req.session})
            }
            else{
                res.status(400).json({message: "User not logged in"})
            }
        }
        catch(err) {
            res.status(500).json({message: err.message})
        }
    }
    
    async getAllUser(req,res) {
        try {
            const users = await User_TDG.getAllUsers();
            res.status(201).json({message: "All users", users: users})
        }
        catch(err) {
            res.status(500).json({message: err.message})
        }
    }
    
    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
              return res.status(500).json({ message: "Logout failed" });
            }
            res.clearCookie("connect.sid");
            res.json({ message: "Logged out successfully" });
        });
    }
    
    async updatePreferences(uid, loggedUserId, favorites) {
        try {
          // Validate user ID
          if (!uid) {
            throw new Error('User ID is required');
          }
         
          // Ensure favorites is always an array
          const favoritesArray = Array.isArray(favorites) ? favorites : [];
         
          // Validate that each favorite is a valid integer
          const validFavorites = favoritesArray.filter(fav => {
            const num = parseInt(fav);
            return !isNaN(num) && Number.isInteger(num);
          });
     
          const userTDG = new User_TDG();
          const result = await userTDG.updatePreferences(uid, loggedUserId, validFavorites);
          return result;
        } catch (error) {
          console.error('Error in User_Catalog.updatePreferences:', error);
          throw error;
        }
    }
}

// Export the singleton instance
export default User_Catalog.getInstance();