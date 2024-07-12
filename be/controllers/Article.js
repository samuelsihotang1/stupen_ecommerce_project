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

export const createProduct = async (req, res) => {
	const { name, price } = req.body;
	try {
		await Product.create({
			name: name,
			price: price,
			userId: req.userId,
		});
		res.status(201).json({ msg: 'Product Created Successfuly' });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const updateProduct = async (req, res) => {
	try {
		const product = await Product.findOne({
			where: {
				uuid: req.params.id,
			},
		});
		if (!product) return res.status(404).json({ msg: 'Data tidak ditemukan' });
		const { name, price } = req.body;
		if (req.role === 'admin') {
			await Product.update(
				{ name, price },
				{
					where: {
						id: product.id,
					},
				}
			);
		} else {
			if (req.userId !== product.userId)
				return res.status(403).json({ msg: 'Akses terlarang' });
			await Product.update(
				{ name, price },
				{
					where: {
						[Op.and]: [{ id: product.id }, { userId: req.userId }],
					},
				}
			);
		}
		res.status(200).json({ msg: 'Product updated successfuly' });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findOne({
			where: {
				uuid: req.params.id,
			},
		});
		if (!product) return res.status(404).json({ msg: 'Data tidak ditemukan' });
		const { name, price } = req.body;
		if (req.role === 'admin') {
			await Product.destroy({
				where: {
					id: product.id,
				},
			});
		} else {
			if (req.userId !== product.userId)
				return res.status(403).json({ msg: 'Akses terlarang' });
			await Product.destroy({
				where: {
					[Op.and]: [{ id: product.id }, { userId: req.userId }],
				},
			});
		}
		res.status(200).json({ msg: 'Product deleted successfuly' });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
