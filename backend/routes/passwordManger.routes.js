import express from 'express';
import { getPassword, passwordManager, deletePassword } from '../controllers/passwordManager.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/password', protectRoute, passwordManager)
    .get('/get-passwoord', protectRoute, getPassword)
    .delete('/delete-password/:id', deletePassword)

export default router;