import express from 'express';
import {
	getProductBySearch,
	getProductBySlug,
	getProducts,
	getProductsByTotal,
} from '../controllers/Products.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:total', getProductsByTotal);
router.get('/product/:slug', getProductBySlug);
router.get('/product/latest/:search', getProductBySearch);

export default router;
