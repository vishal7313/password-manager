import express from 'express';
import { passwordManager } from '../controllers/passwordManager.controller.js';

const router = express.Router();

router.post('/password', passwordManager)

export default router;