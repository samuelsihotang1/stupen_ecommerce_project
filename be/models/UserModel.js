import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Users = db.define(
	'users',
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [3, 100],
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		role: {
			type: DataTypes.ENUM,
			values: ['admin', 'user'],
			allowNull: false,
			defaultValue: 'user',
			validate: {
				notEmpty: true,
			},
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				notEmpty: true,
				len: [3, 100],
			},
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				notEmpty: true,
				len: [2, 50],
			},
		},
		postalCode: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				notEmpty: true,
				len: [3, 20],
			},
		},
		province: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				notEmpty: true,
				len: [2, 50],
			},
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				notEmpty: true,
				len: [10, 15],
			},
		},
	},
	{
		freezeTableName: true,
	}
);

export default Users;
