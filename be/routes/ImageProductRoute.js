import express from 'express';
import { getImageProductById } from '../controllers/ImageProduct.js';

const router = express.Router();

router.get('/image/product/:id', getImageProductById);

export default router;
