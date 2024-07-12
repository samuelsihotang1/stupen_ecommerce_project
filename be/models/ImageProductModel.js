import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Products from './ProductModel.js';

const { DataTypes } = Sequelize;

const ImageProducts = db.define(
	'imageproduct',
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		freezeTableName: true,
	}
);

Products.hasMany(ImageProducts);
ImageProducts.belongsTo(Products, { foreignKey: 'productId' });

export default ImageProducts;
