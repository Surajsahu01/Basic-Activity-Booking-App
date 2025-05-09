import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    
    },
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity",      
    },
    bookedAt:{
        type: Date,
        default: Date.now,
    },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;