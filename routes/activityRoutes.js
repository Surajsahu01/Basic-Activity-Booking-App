import express from 'express';
import { createActivity, getActivities } from '../controllers/activityController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getActivities);
router.post('/create', createActivity);

export default router;