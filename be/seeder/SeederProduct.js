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
				title: 'Gantungan Kunci dari Kertas Daur Ulang',
				slug: 'gantungan-kunci-kertas-daur-ulang',
				text: 'Gantungan kunci yang terbuat dari kertas daur ulang. Ramah lingkungan dan unik.',
				price: 15000,
			},
			{
				title: 'Gaun Indah dengan Kertas Daur Ulang',
				slug: 'gaun-indah-dengan-kertas-daur-ulang',
				text: 'Gaun indah yang terbuat dari kertas daur ulang, menciptakan kombinasi sempurna antara keanggunan dan keberlanjutan.',
				price: 120000,
			},
			{
				title: 'Mainan Anak dari Plastik Daur Ulang',
				slug: 'mainan-anak-dari-plastik-daur-ulang',
				text: 'Mainan edukatif untuk anak-anak yang terbuat dari plastik daur ulang. Aman dan menyenangkan.',
				price: 30000,
			},
			{
				title: 'Mobil Mainan Anak dari Kardus Daur Ulang',
				slug: 'mobil-mainan-anak-dari-kardus-daur-ulang',
				text: 'Mobil mainan anak yang dibuat dari kardus daur ulang, cocok untuk kreativitas dan bermain ramah lingkungan.',
				price: 20000,
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
				title: 'Vas Bunga dari Kertas Daur Ulang',
				slug: 'vas-bunga-dari-kertas-daur-ulang',
				text: 'Vas bunga unik yang terbuat dari kertas daur ulang. Ramah lingkungan dan artistik.',
				price: 25000,
			},
			{
				title: 'Gelas Unik dari Bambu',
				slug: 'gelas-unik-dari-bambu',
				text: 'Gelas unik dari bambu ini dibuat dengan teknik tradisional yang mempertahankan keindahan alami bambu. Cocok digunakan untuk minum teh atau kopi.',
				price: 40000,
			},
			{
				title: 'Teko Tradisional dari Kelapa ',
				slug: 'teko-tradisional-dari-kelapa',
				text: 'Teko tradisional dari kelapa ini merupakan karya seni dari tangan-tangan terampil pengrajin lokal. Ideal untuk menyeduh teh atau kopi dengan cita rasa alami.',
				price: 45000,
			},
			{
				title: 'Mangkok Tempurung Kelapa Berukir ',
				slug: 'mangkok-tempurung-kelapa-berukir',
				text: 'Mangkok tempurung kelapa berukir ini dibuat dari bahan kelapa asli yang dipahat dengan motif tradisional. Cocok digunakan untuk hidangan nasi atau sup.',
				price: 25000,
			},
			{
				title: 'Tempat ATK Ukir dari Bambu',
				slug: 'tempat-atk-ukir-dari-bambu',
				text: 'Tempat ini adalah sebuah tempat Alat Tulis Kantor (ATK) yang diukir dengan indah dari bambu alami.',
				price: 35000,
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
