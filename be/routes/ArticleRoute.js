import express from 'express';
import {
	getArticleBySearch,
	getArticleBySlug,
	getArticles,
	getArticlesByTotal,
} from '../controllers/Articles.js';

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:total', getArticlesByTotal);
router.get('/article/:slug', getArticleBySlug);
router.get('/article/latest/:search', getArticleBySearch);

export default router;
