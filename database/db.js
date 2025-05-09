import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection error", error);
    }
}

