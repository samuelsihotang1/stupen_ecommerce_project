import { Op } from 'sequelize';
import Article from '../models/ArticleModel.js';

export const getArticles = async (req, res) => {
	try {
		const response = await Article.findAll({
			order: [['createdAt', 'DESC']],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getArticlesByTotal = async (req, res) => {
	try {
		const total = parseInt(req.params.total);
		const response = await Article.findAll({
			limit: total,
			order: [['createdAt', 'DESC']],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getArticleBySlug = async (req, res) => {
	try {
		const response = await Article.findOne({
			where: {
				slug: req.params.slug,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getArticleBySearch = async (req, res) => {
	const searchValue = req.params.search;

	try {
		const response = await Article.findAll({
			limit: 5,
			where: {
				[Op.or]: [
					{ title: { [Op.like]: `%${searchValue}%` } },
					{ text: { [Op.like]: `%${searchValue}%` } },
				],
			},
		});

		if (response.length === 0) {
			res.status(404).json({
				msg: 'No articles found matching the search criteria.',
			});
		} else {
			res.status(200).json(response);
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
