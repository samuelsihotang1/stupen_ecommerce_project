import ImageProducts from '../models/ImageProductModel.js';

const SeederImageProduct = async () => {
	try {
		const imageProductsData = [
			{
				image: 'tas-belanja.jpg',
				productId: 1,
			},
			{
				image: 'tas-belanja2.jpg',
				productId: 1,
			},
			{
				image: 'botol-minum.jpg',
				productId: 2,
			},
			{
				image: 'botol-minum2.jpg',
				productId: 2,
			},
			{
				image: 'wadah-makanan.jpg',
				productId: 3,
			},
			{
				image: 'wadah-makanan2.jpg',
				productId: 3,
			},
			{
				image: 'mainan-anak.jpg',
				productId: 4,
			},
			{
				image: 'mainan-anak2.jpg',
				productId: 4,
			},
			{
				image: 'meja-taman.jpg',
				productId: 5,
			},
			{
				image: 'meja-taman2.jpg',
				productId: 5,
			},
			{
				image: 'kerajinan-tangan.jpg',
				productId: 6,
			},
			{
				image: 'kerajinan-tangan2.jpg',
				productId: 6,
			},
			{
				image: 'lampu-hias2.jpg',
				productId: 7,
			},
			{
				image: 'lampu-hias.jpg',
				productId: 7,
			},
			{
				image: 'notebook2.jpg',
				productId: 8,
			},
			{
				image: 'notebook.jpg',
				productId: 8,
			},
			{
				image: 'vas-bunga2.jpg',
				productId: 9,
			},
			{
				image: 'vas-bunga.jpg',
				productId: 9,
			},
			{
				image: 'dompet2.jpg',
				productId: 10,
			},
			{
				image: 'dompet.jpg',
				productId: 10,
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
