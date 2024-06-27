import express from 'express';
import { passwordManager } from '../controllers/passwordManager.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/password', protectRoute, passwordManager)

export default router;