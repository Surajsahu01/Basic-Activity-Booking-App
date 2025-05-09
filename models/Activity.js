import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true, 
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,   
    },
    time: {
        type: String, 
    },
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;