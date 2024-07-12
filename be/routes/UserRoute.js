import express from 'express';
import {
	createUser,
	getUserById,
} from '../controllers/Users.js';
import { adminOnly, verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', createUser);

export default router;
