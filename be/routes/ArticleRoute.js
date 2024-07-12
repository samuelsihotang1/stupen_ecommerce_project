import express from 'express';
import {
	getArticleBySlug,
	getArticles,
	getArticlesByTotal,
} from '../controllers/Article.js';

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:total', getArticlesByTotal);
router.get('/article/:slug', getArticleBySlug);
// router.get('/products/:id', getProductById);
// router.post('/products', createProduct);
// router.patch('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

export default router;
