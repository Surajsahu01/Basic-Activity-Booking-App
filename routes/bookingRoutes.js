import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { bookingController, mybookings } from '../controllers/bookingController.js';

const router = express.Router();

router.get("/mybookings", authMiddleware, mybookings);
router.post("/book/:id", authMiddleware, bookingController);

export default router;