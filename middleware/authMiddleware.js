import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();


const authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
  
    const token = authHeader.split(' ')[1];
    // console.log("Token:", token);
    
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId || decoded.id; 
      
      const userExists = await User.findById(req.userId);
      if (!userExists) {
        return res.status(401).json({ error: "Unauthorized: User not found" });
      }
      req.userExists = userExists;
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
  };
   

export default authMiddleware;