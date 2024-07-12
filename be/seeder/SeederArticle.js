import Articles from '../models/ArticleModel.js';

const SeederArticle = async () => {
	try {
		const articlesData = [
			{
				title: 'Panduan Memasak Nasi Goreng Sempurna',
				text: 'Nasi goreng adalah salah satu makanan favorit di Indonesia. Dalam artikel ini, kami akan membahas cara memasak nasi goreng yang sempurna, mulai dari bahan-bahan hingga teknik memasak yang tepat. Gunakan bumbu-bumbu tradisional untuk mendapatkan cita rasa yang autentik.\n\nPastikan untuk menggunakan nasi yang sudah dingin agar hasilnya lebih enak. Tambahkan berbagai topping seperti telur, ayam, atau udang sesuai selera Anda. Selamat mencoba!',
				image: 'nasi-goreng.jpg',
				slug: 'panduan-memasak-nasi-goreng-sempurna',
			},
			{
				title: 'Tips Menjaga Kesehatan di Musim Pancaroba',
				text: 'Musim pancaroba sering kali membawa perubahan cuaca yang drastis. Untuk menjaga kesehatan, penting bagi kita untuk meningkatkan daya tahan tubuh dengan mengonsumsi vitamin dan mineral yang cukup. Selain itu, tetap berolahraga secara teratur untuk menjaga kebugaran.\n\nHindari makanan yang tidak sehat dan pastikan untuk selalu mencuci tangan sebelum makan. Minum air putih yang cukup setiap hari dan pastikan istirahat yang cukup untuk menjaga kesehatan tubuh secara keseluruhan.',
				image: 'kesehatan-pancaroba.jpg',
				slug: 'tips-menjaga-kesehatan-di-musim-pancaroba',
			},
			{
				title: 'Manfaat Yoga untuk Kesehatan Mental',
				text: 'Yoga tidak hanya bermanfaat bagi kesehatan fisik, tetapi juga kesehatan mental. Latihan yoga dapat membantu mengurangi stres dan kecemasan. Dengan rutin berlatih yoga, Anda dapat meningkatkan kualitas tidur dan meningkatkan konsentrasi.\n\nTeknik pernapasan dalam yoga membantu menenangkan pikiran dan meredakan ketegangan. Cobalah untuk mengalokasikan waktu setiap hari untuk berlatih yoga, bahkan hanya selama 10-15 menit, untuk merasakan manfaatnya.',
				image: 'manfaat-yoga.jpg',
				slug: 'manfaat-yoga-untuk-kesehatan-mental',
			},
			{
				title: 'Resep Soto Ayam Sederhana',
				text: 'Soto ayam adalah salah satu hidangan khas Indonesia yang sangat populer. Dalam artikel ini, kami akan membagikan resep soto ayam sederhana yang bisa Anda coba di rumah. Bahan-bahannya mudah didapat dan cara membuatnya pun tidak sulit.\n\nPastikan untuk menggunakan ayam kampung agar rasanya lebih lezat. Sajikan soto ayam dengan nasi putih, telur rebus, dan sambal sesuai selera. Selamat mencoba resep ini di rumah!',
				image: 'soto-ayam.jpg',
				slug: 'resep-soto-ayam-sederhana',
			},
			{
				title: 'Cara Efektif Belajar Bahasa Asing',
				text: 'Belajar bahasa asing bisa menjadi tantangan, tetapi dengan metode yang tepat, Anda bisa menguasainya dengan lebih mudah. Pertama, tentukan tujuan Anda belajar bahasa tersebut dan buatlah jadwal belajar yang konsisten. Gunakan berbagai sumber belajar seperti buku, aplikasi, dan video.\n\nPraktekkan bahasa tersebut dengan berbicara langsung dengan penutur asli atau teman belajar. Jangan takut membuat kesalahan, karena dari kesalahan tersebut Anda bisa belajar lebih banyak. Tetaplah termotivasi dan bersabar dalam proses belajar.',
				image: 'belajar-bahasa-asing.jpg',
				slug: 'cara-efektif-belajar-bahasa-asing',
			},
			{
				title: 'Panduan Merawat Tanaman Hias di Rumah',
				text: 'Merawat tanaman hias di rumah bisa menjadi hobi yang menyenangkan dan bermanfaat. Dalam artikel ini, kami akan memberikan panduan lengkap tentang cara merawat tanaman hias agar tetap sehat dan indah. Mulailah dengan memilih tanaman yang sesuai dengan kondisi lingkungan rumah Anda.\n\nPastikan untuk memberikan pencahayaan yang cukup dan siram tanaman secara teratur. Jangan lupa untuk memangkas daun yang kering dan memberikan pupuk secara berkala. Dengan perawatan yang tepat, tanaman hias Anda akan tumbuh subur dan mempercantik rumah.',
				image: 'merawat-tanaman-hias.jpg',
				slug: 'panduan-merawat-tanaman-hias-di-rumah',
			},
			{
				title: 'Tips Hemat Belanja Bulanan',
				text: 'Belanja bulanan bisa menjadi pengeluaran yang cukup besar jika tidak diatur dengan baik. Berikut adalah beberapa tips untuk menghemat belanja bulanan Anda. Pertama, buatlah daftar belanja sebelum pergi ke supermarket dan patuhi daftar tersebut.\n\nManfaatkan promo dan diskon yang ada untuk mendapatkan harga terbaik. Beli barang-barang dalam jumlah besar jika harganya lebih murah dan bisa disimpan dalam jangka waktu lama. Dengan perencanaan yang baik, Anda bisa menghemat pengeluaran bulanan dengan signifikan.',
				image: 'tips-hemat-belanja.jpg',
				slug: 'tips-hemat-belanja-bulanan',
			},
			{
				title: 'Cara Mudah Membuat Website Pribadi',
				text: 'Membuat website pribadi kini semakin mudah dengan berbagai platform yang tersedia. Dalam artikel ini, kami akan membahas langkah-langkah mudah untuk membuat website pribadi. Pertama, pilih platform yang sesuai seperti WordPress atau Wix.\n\nSelanjutnya, pilih template yang sesuai dengan tema website Anda dan mulailah menambahkan konten. Jangan lupa untuk mengoptimalkan website Anda agar mudah ditemukan di mesin pencari. Dengan website pribadi, Anda bisa membagikan berbagai informasi dan karya Anda kepada publik.',
				image: 'membuat-website-pribadi.jpg',
				slug: 'cara-mudah-membuat-website-pribadi',
			},
			{
				title: 'Manfaat Meditasi untuk Kehidupan Sehari-hari',
				text: 'Meditasi memiliki banyak manfaat untuk kehidupan sehari-hari. Dengan rutin meditasi, Anda bisa mengurangi stres, meningkatkan fokus, dan mendapatkan ketenangan batin. Meditasi juga membantu Anda untuk lebih memahami diri sendiri dan meningkatkan empati terhadap orang lain.\n\nCobalah untuk meluangkan waktu beberapa menit setiap hari untuk bermeditasi. Temukan tempat yang tenang dan nyaman, duduk dengan posisi yang rileks, dan fokus pada pernapasan. Rasakan perubahan positif dalam hidup Anda dengan meditasi rutin.',
				image: 'manfaat-meditasi.jpg',
				slug: 'manfaat-meditasi-untuk-kehidupan-sehari-hari',
			},
			{
				title: 'Panduan Memilih Laptop untuk Mahasiswa',
				text: 'Memilih laptop yang tepat sangat penting bagi mahasiswa untuk mendukung kegiatan belajar. Dalam artikel ini, kami akan memberikan panduan memilih laptop yang sesuai dengan kebutuhan mahasiswa. Pertimbangkan spesifikasi seperti prosesor, RAM, dan kapasitas penyimpanan.\n\nPilih laptop yang ringan dan mudah dibawa kemana-mana. Jangan lupa untuk memperhatikan daya tahan baterai dan fitur-fitur tambahan yang mendukung produktivitas. Dengan laptop yang tepat, kegiatan belajar akan menjadi lebih lancar dan efektif.',
				image: 'memilih-laptop.jpg',
				slug: 'panduan-memilih-laptop-untuk-mahasiswa',
			},
		];

		for (const article of articlesData) {
			const existingArticle = await Articles.findOne({
				where: { slug: article.slug },
			});
			if (existingArticle) {
				console.log(
					`Article with slug "${article.slug}" already exists. Skipping seeding.`
				);
			} else {
				await Articles.create(article);
				console.log(`Article "${article.title}" seeded successfully!`);
			}
		}
	} catch (error) {
		console.error('Failed to seed articles:', error);
	}
};

export default SeederArticle;
