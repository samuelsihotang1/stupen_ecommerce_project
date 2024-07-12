import { Op } from 'sequelize';
import Product from '../models/ProductModel.js';

export const getProducts = async (req, res) => {
	try {
		const response = await Product.findAll({
			order: [['createdAt', 'DESC']],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getProductsByTotal = async (req, res) => {
	try {
		const total = parseInt(req.params.total);
		const response = await Product.findAll({
			limit: total,
			order: [['createdAt', 'DESC']],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getProductBySlug = async (req, res) => {
	try {
		const response = await Product.findOne({
			where: {
				slug: req.params.slug,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getProductBySearch = async (req, res) => {
	const searchValue = req.params.search;

	try {
		const response = await Product.findAll({
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
				msg: 'No products found matching the search criteria.',
			});
		} else {
			res.status(200).json(response);
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
