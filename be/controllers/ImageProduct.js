import ImageProducts from '../models/ImageProductModel.js';

export const getImageProductById = async (req, res) => {
	try {
		const response = await ImageProducts.findAll({
			where: {
				productId: req.params.id,
			},
			order: [['createdAt', 'DESC']],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};