import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';


export const register = async (req, res) => {
    const {name, email, phone, password} = req.body;
    try {
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "Please enter all fields" });
        }
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});    
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: "Password is incorrect"});
        }

        // const payload = { user: { userId: user._id } };
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, secure: true  });
        res.status(200).json({ token, user: { userId: user._id, name: user.name, email: user.email, phone: user.phone } });
        // console.log("Token:", token);
        
        
    } catch (error) {
        res.status(500).json({message: "Server error"});    
    }
}


export const logout = async(req, res) =>{
    try {
        if(!req.cookies.token){
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        console.log("Token:", req.cookies.token);
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};
