import Booking from "../models/Booking.js";


export const bookingController = async (req, res) => {
    const activityId = req.params.id;
    const userId = req.userId;

    try {
        const alreadyBooked = await Booking.findOne({user: userId, activity: activityId});
        if (alreadyBooked) {
            return res.status(400).json({message: "Already booked"});
        }
        const newBooking = new Booking({
            user: userId,
            activity: activityId,
        });
        await newBooking.save();
        res.status(201).json({message: "Booked successfully", booking: newBooking});
     
    } catch (error) {
        res.status(500).json({message: "Server error"});  
    }
}

export const mybookings = async (req, res) => {
    const user = req.userId;
    try {
        const bookings = await Booking.find({user});
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
}