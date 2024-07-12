import argon2 from 'argon2';
import User from '../models/UserModel.js';

export const getUserById = async (req, res) => {
	try {
		const response = await User.findOne({
			where: {
				uuid: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createUser = async (req, res) => {
	const {
		name,
		email,
		password,
		passwordConfirmation,
		address,
		city,
		postalCode,
		province,
		phone,
	} = req.body;
	if (password !== passwordConfirmation)
		return res.status(400).json({ msg: 'Password dan Confirm Password tidak cocok' });
	const hashPassword = await argon2.hash(password);
	try {
		await User.create({
			name: name,
			email: email,
			password: hashPassword,
			role: 'user',
			address: address,
			city: city,
			postalCode: postalCode,
			province: province,
			phone: phone,
		});
		res.status(201).json({ msg: 'Register Berhasil' });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
