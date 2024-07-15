import ImageProducts from '../models/ImageProductModel.js';

const SeederImageProduct = async () => {
	try {
		const imageProductsData = [
			{
				image: 'tas-belanja-ramah-lingkungan.jpg',
				productId: 1,
			},
			{
				image: 'tas-belanja-ramah-lingkungan2.jpg',
				productId: 1,
			},
			{
				image: 'tas-belanja-ramah-lingkungan3.jpg',
				productId: 1,
			},
			{
				image: 'tas-belanja-ramah-lingkungan4.jpg',
				productId: 1,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang.jpg',
				productId: 2,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang2.jpg',
				productId: 2,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang3.jpg',
				productId: 2,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang4.jpg',
				productId: 2,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang.jpg',
				productId: 3,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang2.jpg',
				productId: 3,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang3.jpg',
				productId: 3,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang4.jpg',
				productId: 3,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang.jpg',
				productId: 4,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang2.jpg',
				productId: 4,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang3.jpg',
				productId: 4,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang4.jpg',
				productId: 4,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang.jpg',
				productId: 5,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang2.jpg',
				productId: 5,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang3.jpg',
				productId: 5,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang4.jpg',
				productId: 5,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang.jpg',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang2.jpg',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang3.jpg',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang4.jpg',
				productId: 6,
			},
			{
				image: 'lampu-hias-dari-botol-plastik-daur-ulang.jpg',
				productId: 7,
			},
			{
				image: 'lampu-hias-dari-botol-plastik-daur-ulang2.jpg',
				productId: 7,
			},
			{
				image: 'lampu-hias-dari-botol-plastik-daur-ulang3.jpg',
				productId: 7,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang.jpg',
				productId: 8,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang2.jpg',
				productId: 8,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang3.jpg',
				productId: 8,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang4.jpg',
				productId: 8,
			},
			{
				image: 'gelas-unik-dari-bambu.jpg',
				productId: 9,
			},
			{
				image: 'gelas-unik-dari-bambu2.jpg',
				productId: 9,
			},
			{
				image: 'teko-tradisional-dari-kelapa.jpg',
				productId: 10,
			},
			{
				image: 'teko-tradisional-dari-kelapa2.jpg',
				productId: 10,
			},
			{
				image: 'teko-tradisional-dari-kelapa3.jpg',
				productId: 10,
			},
			{
				image: 'teko-tradisional-dari-kelapa4.jpg',
				productId: 10,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir.jpg',
				productId: 11,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir2.jpg',
				productId: 11,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir3.jpg',
				productId: 11,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir4.jpg',
				productId: 11,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu.jpg',
				productId: 12,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu2.jpg',
				productId: 12,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu3.jpg',
				productId: 12,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu4.jpg',
				productId: 12,
			},
		];

		for (const imageProduct of imageProductsData) {
			const existingImageProduct = await ImageProducts.findOne({
				where: { image: imageProduct.image, productId: imageProduct.productId },
			});

			if (existingImageProduct) {
				console.log(
					`ImageProduct with image "${imageProduct.image}" for product ID "${imageProduct.productId}" already exists. Skipping seeding.`
				);
			} else {
				await ImageProducts.create({
					image: imageProduct.image,
					productId: imageProduct.productId,
				});
				console.log(
					`ImageProduct "${imageProduct.image}" for product ID "${imageProduct.productId}" seeded successfully!`
				);
			}
		}
	} catch (error) {
		console.error('Failed to seed image products:', error);
	}
};

export default SeederImageProduct;
