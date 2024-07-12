import argon2 from 'argon2';
import User from '../models/UserModel.js';

const SeederUser = async () => {
	try {
		const existingUser = await User.findOne({ where: { email: 'admin@gmail.com' } });
		if (!existingUser) {
			const hashPassword = await argon2.hash('admin@gmail.com');
			await User.bulkCreate([
				{
					name: 'Admin',
					email: 'admin@gmail.com',
					password: hashPassword,
					role: 'admin',
					address: 'Admin Address',
					city: 'Admin City',
					postalCode: 'Admin Postal Code',
					province: 'Admin Province',
					phone: 'Admin Phone',
				},
			]);
		}
		console.log('User seeded successfully!');
	} catch (error) {
		console.error('Failed to seed User:', error);
	}
};

export default SeederUser;
