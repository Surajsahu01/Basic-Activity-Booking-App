import Activity from "../models/Activity.js";

export const createActivity = async (req, res) => {
    const {title, description, location} = req.body;
    try {
        const now = new Date();
        const date = now.toISOString().split('T')[0]; 
        const time = now.toTimeString().split(' ')[0];


        const newActivity = new Activity({title, description, location, date, time});
        await newActivity.save();

        res.status(201).json({message: "Activity created successfully", activity: newActivity});
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};

export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};
