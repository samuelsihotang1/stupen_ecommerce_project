import ImageProducts from '../models/ImageProductModel.js';

const SeederImageProduct = async () => {
	try {
		const imageProductsData = [
			{
				image: 'tas-belanja-ramah-lingkungan.jfif',
				productId: 1,
			},
			{
				image: 'tas-belanja-ramah-lingkungan2.jfif',
				productId: 1,
			},
			{
				image: 'tas-belanja-ramah-lingkungan3.jfif',
				productId: 1,
			},
			{
				image: 'tas-belanja-ramah-lingkungan4.jfif',
				productId: 1,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang.jfif',
				productId: 2,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang2.jfif',
				productId: 2,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang3.jfif',
				productId: 2,
			},
			{
				image: 'gantungan-kunci-kertas-daur-ulang4.jfif',
				productId: 2,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang.jfif',
				productId: 3,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang2.jfif',
				productId: 3,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang3.jfif',
				productId: 3,
			},
			{
				image: 'gaun-indah-dengan-kertas-daur-ulang4.jfif',
				productId: 3,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang.jfif',
				productId: 4,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang2.jfif',
				productId: 4,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang3.jfif',
				productId: 4,
			},
			{
				image: 'mainan-anak-dari-plastik-daur-ulang4.jfif',
				productId: 4,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang.jfif',
				productId: 5,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang2.jfif',
				productId: 5,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang3.jfif',
				productId: 5,
			},
			{
				image: 'mobil-mainan-anak-dari-kardus-daur-ulang4.jfif',
				productId: 5,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang.jfif',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang2.jfif',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang3.jfif',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan-dari-kertas-daur-ulang4.jfif',
				productId: 6,
			},
			{
				image: 'lampu-hias-dari-botol-plastik-daur-ulang.jfif',
				productId: 7,
			},
			{
				image: 'lampu-hias-dari-botol-plastik-daur-ulang2.jfif',
				productId: 7,
			},
			{
				image: 'lampu-hias-dari-botol-plastik-daur-ulang3.jfif',
				productId: 7,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang.jfif',
				productId: 8,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang2.jfif',
				productId: 8,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang3.jfif',
				productId: 8,
			},
			{
				image: 'vas-bunga-dari-kertas-daur-ulang4.jfif',
				productId: 8,
			},
			{
				image: 'gelas-unik-dari-bambu.jfif',
				productId: 9,
			},
			{
				image: 'gelas-unik-dari-bambu2.jfif',
				productId: 9,
			},
			{
				image: 'teko-tradisional-dari-kelapa.jfif',
				productId: 10,
			},
			{
				image: 'teko-tradisional-dari-kelapa2.jfif',
				productId: 10,
			},
			{
				image: 'teko-tradisional-dari-kelapa3.jfif',
				productId: 10,
			},
			{
				image: 'teko-tradisional-dari-kelapa4.jfif',
				productId: 10,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir.jfif',
				productId: 11,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir2.jfif',
				productId: 11,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir3.jfif',
				productId: 11,
			},
			{
				image: 'mangkok-tempurung-kelapa-berukir4.jfif',
				productId: 11,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu.jfif',
				productId: 12,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu2.jfif',
				productId: 12,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu3.jfif',
				productId: 12,
			},
			{
				image: 'tempat-atk-ukir-dari-bambu4.jfif',
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
