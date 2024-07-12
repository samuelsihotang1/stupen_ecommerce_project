import Products from '../models/ProductModel.js';

const SeederProduct = async () => {
	try {
		const productsData = [
			{
				title: 'Tas Belanja Ramah Lingkungan',
				slug: 'tas-belanja-ramah-lingkungan',
				text: 'Tas belanja yang terbuat dari plastik daur ulang. Tahan lama dan bisa dipakai berulang kali.',
				price: 50000,
			},
			{
				title: 'Botol Minum Stainless Steel',
				slug: 'botol-minum-stainless-steel',
				text: 'Botol minum yang terbuat dari stainless steel daur ulang. Aman digunakan dan tahan lama.',
				price: 75000,
			},
			{
				title: 'Wadah Makanan Kaca',
				slug: 'wadah-makanan-kaca',
				text: 'Wadah makanan yang terbuat dari kaca daur ulang. Tahan panas dan aman untuk makanan.',
				price: 60000,
			},
			{
				title: 'Mainan Anak dari Plastik Daur Ulang',
				slug: 'mainan-anak-dari-plastik-daur-ulang',
				text: 'Mainan edukatif untuk anak-anak yang terbuat dari plastik daur ulang. Aman dan menyenangkan.',
				price: 30000,
			},
			{
				title: 'Meja Taman dari Kayu Daur Ulang',
				slug: 'meja-taman-dari-kayu-daur-ulang',
				text: 'Meja taman yang terbuat dari kayu daur ulang. Cocok untuk taman atau teras.',
				price: 200000,
			},
			{
				title: 'Kerajinan Tangan dari Kertas Daur Ulang',
				slug: 'kerajinan-tangan-dari-kertas-daur-ulang',
				text: 'Kerajinan tangan yang unik dan menarik, dibuat dari kertas daur ulang.',
				price: 40000,
			},
			{
				title: 'Lampu Hias dari Botol Plastik Daur Ulang',
				slug: 'lampu-hias-dari-botol-plastik-daur-ulang',
				text: 'Lampu hias yang kreatif dan ramah lingkungan, dibuat dari botol plastik daur ulang.',
				price: 50000,
			},
			{
				title: 'Notebook dari Kertas Daur Ulang',
				slug: 'notebook-dari-kertas-daur-ulang',
				text: 'Notebook yang dibuat dari kertas daur ulang. Cocok untuk mencatat ide-ide kreatif.',
				price: 25000,
			},
			{
				title: 'Vas Bunga dari Kaca Daur Ulang',
				slug: 'vas-bunga-dari-kaca-daur-ulang',
				text: 'Vas bunga yang elegan dan ramah lingkungan, dibuat dari kaca daur ulang.',
				price: 70000,
			},
			{
				title: 'Dompet dari Kulit Daur Ulang',
				slug: 'dompet-dari-kulit-daur-ulang',
				text: 'Dompet yang stylish dan tahan lama, dibuat dari kulit daur ulang.',
				price: 85000,
			},
		];

		for (const product of productsData) {
			const existingProduct = await Products.findOne({
				where: { slug: product.slug },
			});
			if (existingProduct) {
				console.log(
					`Product with slug "${product.slug}" already exists. Skipping seeding.`
				);
			} else {
				await Products.create(product);
				console.log(`Product "${product.title}" seeded successfully!`);
			}
		}
	} catch (error) {
		console.error('Failed to seed products:', error);
	}
};

export default SeederProduct;
