import Products from '../models/ProductModel.js';

const SeederProduct = async () => {
	try {
		const productsData = [
			{
				title: 'Tas Belanja Ramah Lingkungan',
				slug: 'tas-belanja-ramah-lingkungan',
				text: 'Tas belanja yang terbuat dari plastik daur ulang adalah pilihan yang cerdas untuk pengguna yang peduli lingkungan. Dibandingkan dengan tas plastik sekali pakai, tas ini menawarkan keberlanjutan dengan memanfaatkan bahan yang dapat didaur ulang. Mereka umumnya dirancang untuk tahan lama, mampu bertahan dari penggunaan berulang kali tanpa kehilangan kekuatan atau kegunaannya. Ini tidak hanya mengurangi limbah plastik yang berakhir di lingkungan, tetapi juga membantu mengurangi konsumsi sumber daya baru yang diperlukan untuk memproduksi tas-tas sekali pakai.\n\nPenggunaan tas belanja dari plastik daur ulang juga mempromosikan kesadaran akan pentingnya daur ulang dalam siklus hidup barang-barang konsumen. Dengan memilih produk ini, konsumen turut berkontribusi dalam meminimalkan jejak karbon dan mengurangi tekanan terhadap sumber daya alam. Di samping itu, penggunaan yang berkelanjutan dari tas-tas ini dapat menjadi contoh baik bagi orang lain dalam masyarakat, mendorong lebih banyak orang untuk mengadopsi gaya hidup ramah lingkungan. Dengan demikian, meskipun tampak sederhana, penggunaan tas belanja dari plastik daur ulang memiliki dampak yang positif terhadap lingkungan secara keseluruhan.',
				price: 50000,
			},
			{
				title: 'Gantungan Kunci dari Kertas Daur Ulang',
				slug: 'gantungan-kunci-kertas-daur-ulang',
				text: 'Gantungan kunci yang terbuat dari kertas daur ulang merupakan contoh yang bagus dari produk ramah lingkungan yang tidak hanya berguna tetapi juga mendukung keberlanjutan lingkungan. Kertas daur ulang digunakan untuk membuat gantungan kunci ini, mengurangi kebutuhan akan bahan-bahan baru dan meminimalkan dampak negatif terhadap lingkungan. Dengan memilih produk seperti ini, konsumen tidak hanya memanfaatkan barang yang fungsional untuk sehari-hari, tetapi juga ikut berkontribusi dalam pelestarian lingkungan.\n\nKeunikan gantungan kunci dari kertas daur ulang juga dapat menjadi pernyataan tentang kesadaran lingkungan pemiliknya. Produk ini sering kali dirancang dengan berbagai motif dan desain yang kreatif, menawarkan pilihan yang berbeda dari gantungan kunci konvensional yang terbuat dari bahan-bahan lain. Melalui penggunaan kertas daur ulang, produsen juga mengedukasi masyarakat tentang pentingnya memanfaatkan sumber daya yang ada dengan lebih bijak. Ini merupakan langkah kecil tetapi penting dalam mengubah kebiasaan konsumsi menuju arah yang lebih berkelanjutan dan ramah lingkungan.',
				price: 15000,
			},
			{
				title: 'Gaun Indah dengan Kertas Daur Ulang',
				slug: 'gaun-indah-dengan-kertas-daur-ulang',
				text: 'Gaun indah yang terbuat dari kertas daur ulang tidak hanya menggabungkan keanggunan dan keberlanjutan secara harmonis, tetapi juga mewakili inovasi dalam industri fashion yang semakin peduli terhadap lingkungan. Dalam proses pembuatannya, bahan kertas daur ulang dipilih dengan cermat untuk memastikan keselarasan antara estetika dan dampak lingkungan yang rendah. Pilihan untuk menggunakan bahan daur ulang menunjukkan komitmen untuk mengurangi jejak karbon dan limbah tekstil, menjadikan gaun ini sebagai simbol perubahan positif dalam cara kita berpakaian.\n\nSelain mempromosikan keberlanjutan, gaun ini juga menginspirasi kesadaran tentang pentingnya daur ulang dalam menciptakan produk fashion yang bertanggung jawab. Dengan mengintegrasikan material daur ulang dalam desainnya, gaun ini memperkuat pesan bahwa keindahan dan kreativitas tidak harus mengorbankan bumi kita. Daur ulang kertas sebagai bahan utama tidak hanya mengurangi kebutuhan akan bahan-bahan baru, tetapi juga memperpanjang siklus hidup produk secara signifikan. Dengan memilih untuk membeli dan mendukung produk seperti ini, kita semua dapat berkontribusi dalam membangun industri fashion yang lebih berkelanjutan dan ramah lingkungan bagi generasi mendatang.',
				price: 120000,
			},
			{
				title: 'Mainan Anak dari Plastik Daur Ulang',
				slug: 'mainan-anak-dari-plastik-daur-ulang',
				text: 'Mainan edukatif yang terbuat dari plastik daur ulang merupakan pilihan yang cerdas dan bertanggung jawab untuk mendidik anak-anak sambil memperhatikan kelestarian lingkungan. Produk ini tidak hanya menyediakan kesempatan bagi anak-anak untuk belajar dan berkembang secara kreatif, tetapi juga mengajarkan nilai-nilai penting tentang penggunaan sumber daya secara bijak dan perlindungan lingkungan. Dengan menggunakan bahan baku dari plastik daur ulang, mainan ini membantu mengurangi jumlah limbah plastik di lingkungan kita yang dapat berdampak negatif pada ekosistem laut dan kehidupan satwa liar.\n\nKeamanan adalah hal utama dalam desain mainan ini, sehingga orang tua dapat merasa tenang saat anak-anak mereka bermain. Selain itu, penggunaan plastik daur ulang sebagai bahan utama juga mengajarkan anak-anak tentang pentingnya daur ulang dan mengurangi jejak karbon dari produksi mainan konvensional yang menggunakan bahan baru. Dengan memilih produk-produk ramah lingkungan seperti ini, kita tidak hanya memberikan pengalaman bermain yang menyenangkan bagi anak-anak, tetapi juga memberikan contoh yang baik dalam menjaga keberlanjutan planet untuk generasi mendatang.',
				price: 30000,
			},
			{
				title: 'Mobil Mainan Anak dari Kardus Daur Ulang',
				slug: 'mobil-mainan-anak-dari-kardus-daur-ulang',
				text: 'Mobil mainan anak yang terbuat dari kardus daur ulang adalah pilihan yang cerdas untuk mengembangkan kreativitas mereka sambil memberikan dampak positif pada lingkungan. Produk ini tidak hanya menginspirasi anak-anak untuk berkreasi dengan tangan mereka sendiri, tetapi juga mengajarkan nilai-nilai tentang pentingnya daur ulang dan menjaga lingkungan. Dengan menggunakan bahan-bahan yang sudah tidak terpakai lagi, seperti kardus bekas, mainan ini membantu mengurangi jumlah limbah plastik dan material lain yang sulit terurai di alam.\n\nKeunggulan lain dari mobil mainan anak dari kardus daur ulang adalah kemampuannya untuk memberikan pengalaman belajar yang holistik. Anak-anak tidak hanya belajar tentang proses mencipta dan mendesain, tetapi juga menginternalisasi nilai-nilai keberlanjutan dan tanggung jawab lingkungan sejak usia dini. Dengan memilih produk-produk ramah lingkungan seperti ini, kita turut mendukung gerakan global untuk memperbaiki kualitas lingkungan hidup kita, sambil merangsang imajinasi dan kreativitas generasi masa depan.',
				price: 20000,
			},
			{
				title: 'Kerajinan Tangan dari Kertas Daur Ulang',
				slug: 'kerajinan-tangan-dari-kertas-daur-ulang',
				text: 'Kerajinan tangan yang unik dan menarik, dibuat dari kertas daur ulang, merupakan salah satu inovasi kreatif yang semakin digemari oleh masyarakat. Produk ini tidak hanya menawarkan nilai estetika yang tinggi, tetapi juga membawa pesan penting tentang pelestarian lingkungan. Dengan memanfaatkan kertas yang sudah tidak terpakai, para pengrajin mampu menciptakan berbagai barang yang menawan, seperti kotak hadiah, hiasan dinding, aksesoris, hingga mainan edukatif. Setiap produk yang dihasilkan memiliki karakteristik dan keunikan tersendiri, yang seringkali tidak bisa ditemukan pada produk massal. Proses pembuatannya pun penuh dengan sentuhan seni, mulai dari pemilihan kertas, pewarnaan alami, hingga teknik melipat dan menempel yang memerlukan ketelitian dan keahlian khusus.\n\nSelain memiliki nilai estetika dan fungsional, kerajinan tangan dari kertas daur ulang juga memberikan dampak positif bagi lingkungan. Dengan mengurangi jumlah kertas yang dibuang, produk ini membantu menekan volume sampah yang berakhir di tempat pembuangan akhir. Daur ulang kertas juga mengurangi kebutuhan akan bahan baku baru, yang pada gilirannya dapat menurunkan tingkat penebangan pohon dan konsumsi energi yang dibutuhkan untuk produksi kertas baru. Oleh karena itu, memilih produk kerajinan dari kertas daur ulang tidak hanya mendukung para pengrajin lokal, tetapi juga berkontribusi pada upaya global untuk menjaga kelestarian lingkungan. Produk ini menjadi contoh nyata bagaimana kreativitas dan kepedulian terhadap alam bisa berjalan beriringan, menciptakan dampak positif bagi bumi dan manusia.',
				price: 40000,
			},
			{
				title: 'Lampu Hias dari Botol Plastik Daur Ulang',
				slug: 'lampu-hias-dari-botol-plastik-daur-ulang',
				text: 'Lampu hias yang kreatif dan ramah lingkungan ini terbuat dari botol plastik daur ulang, menghadirkan solusi estetis dan berkelanjutan bagi dekorasi rumah Anda. Dengan desain yang inovatif, lampu ini tidak hanya menambahkan sentuhan artistik pada ruangan, tetapi juga mengurangi limbah plastik yang mencemari lingkungan. Botol plastik yang umumnya berakhir di tempat pembuangan sampah atau lautan, diubah menjadi karya seni yang fungsional. Setiap lampu dirancang dengan detail yang memikat, memanfaatkan keunikan bentuk dan tekstur botol plastik untuk menciptakan efek pencahayaan yang menawan dan menenangkan.\n\nMemilih produk dari bahan daur ulang seperti lampu hias ini merupakan langkah kecil namun signifikan dalam mendukung kelestarian lingkungan. Limbah plastik adalah salah satu ancaman terbesar bagi ekosistem kita, dan upaya untuk mendaur ulang serta menggunakannya kembali dalam produk sehari-hari dapat membantu mengurangi jejak karbon kita. Selain itu, dengan membeli produk ini, Anda ikut mendukung industri kreatif yang mengedepankan keberlanjutan, serta mendorong kesadaran masyarakat tentang pentingnya daur ulang. Lampu hias dari botol plastik daur ulang ini tidak hanya memperindah ruang Anda, tetapi juga menjadi simbol komitmen Anda terhadap pelestarian lingkungan.',
				price: 50000,
			},
			{
				title: 'Vas Bunga dari Kertas Daur Ulang',
				slug: 'vas-bunga-dari-kertas-daur-ulang',
				text: 'Vas bunga unik yang terbuat dari kertas daur ulang menawarkan solusi ramah lingkungan sekaligus artistik untuk mempercantik ruangan Anda. Produk ini dirancang dengan mempertimbangkan kelestarian lingkungan dan estetika, menghasilkan karya yang tidak hanya indah dipandang tetapi juga mendukung prinsip-prinsip keberlanjutan. Setiap vas bunga dibuat dengan hati-hati menggunakan teknik daur ulang, memastikan bahwa kertas bekas yang biasanya menjadi limbah bisa diolah kembali menjadi produk bernilai tinggi. Dengan bentuk dan desain yang bervariasi, vas ini mampu menambahkan sentuhan artistik pada setiap sudut rumah atau kantor, menciptakan suasana yang hangat dan inspiratif.\n\nMenggunakan produk dari bahan daur ulang seperti vas bunga ini berarti Anda turut berpartisipasi dalam upaya pelestarian lingkungan. Daur ulang kertas membantu mengurangi jumlah sampah yang berakhir di tempat pembuangan akhir dan mengurangi penebangan pohon untuk produksi kertas baru. Dengan memilih vas bunga dari kertas daur ulang, Anda tidak hanya mempercantik ruang hidup Anda tetapi juga berkontribusi pada pengurangan jejak karbon dan perlindungan ekosistem alam. Ini adalah langkah kecil yang membawa dampak besar dalam menjaga bumi kita tetap hijau dan sehat untuk generasi mendatang.',
				price: 25000,
			},
			{
				title: 'Gelas Unik dari Bambu',
				slug: 'gelas-unik-dari-bambu',
				text: 'Gelas unik dari bambu ini dibuat dengan teknik tradisional yang mempertahankan keindahan alami bambu. Proses pembuatan gelas ini melibatkan pengerjaan tangan oleh pengrajin terampil yang memastikan setiap detail tetap autentik dan estetik. Desainnya yang elegan dan alami menjadikan gelas ini tidak hanya berfungsi sebagai wadah minum, tetapi juga sebagai hiasan meja yang menarik. Cocok digunakan untuk minum teh atau kopi, gelas ini memberikan pengalaman minum yang berbeda dengan sentuhan kehangatan alami bambu.\n\nSelain memberikan sentuhan tradisional dan estetika, gelas bambu ini juga ramah lingkungan. Bambu merupakan bahan yang dapat diperbarui dengan cepat, tumbuh lebih cepat daripada kebanyakan pohon, sehingga penggunaannya membantu mengurangi deforestasi. Selain itu, produk ini bisa didaur ulang sepenuhnya dan biodegradable, yang berarti setelah masa pakainya habis, gelas ini tidak akan menambah beban limbah plastik di lingkungan. Dengan memilih gelas bambu ini, Anda tidak hanya mendapatkan produk berkualitas tinggi dan estetis, tetapi juga berkontribusi pada pelestarian lingkungan dan pengurangan jejak karbon.',
				price: 40000,
			},
			{
				title: 'Teko Tradisional dari Kelapa ',
				slug: 'teko-tradisional-dari-kelapa',
				text: 'Teko tradisional dari kelapa ini merupakan karya seni yang diciptakan oleh tangan-tangan terampil pengrajin lokal. Dengan memanfaatkan batok kelapa yang diolah sedemikian rupa, teko ini tidak hanya menampilkan keindahan estetika namun juga memiliki fungsi praktis sebagai alat penyeduh teh atau kopi. Cita rasa alami yang dihasilkan oleh teko kelapa ini menambah kenikmatan pada setiap tegukan, menciptakan pengalaman minum yang berbeda dan lebih autentik. Selain itu, penggunaan bahan alami seperti kelapa memastikan bahwa setiap produk memiliki karakteristik unik, menjadikannya tidak hanya sebagai alat minum tetapi juga sebagai bagian dari dekorasi rumah yang berkelas dan artistik.\n\nKeberlanjutan lingkungan menjadi salah satu nilai penting dari produk ini. Dengan memanfaatkan limbah kelapa yang biasanya terbuang, teko ini mendukung upaya daur ulang dan pengurangan sampah. Proses pembuatannya yang ramah lingkungan dan berbasis pada prinsip-prinsip keberlanjutan membuat produk ini menjadi pilihan yang tepat bagi mereka yang peduli terhadap kelestarian alam. Penggunaan bahan alami dan proses pembuatan yang tidak mencemari lingkungan membantu mengurangi jejak karbon dan menginspirasi gaya hidup yang lebih eco-friendly. Selain itu, dengan membeli produk ini, Anda turut mendukung perekonomian lokal dan keberlanjutan para pengrajin, membantu mereka untuk terus berkarya dan menjaga tradisi kerajinan tangan yang berharga ini tetap hidup.',
				price: 45000,
			},
			{
				title: 'Mangkok Tempurung Kelapa Berukir ',
				slug: 'mangkok-tempurung-kelapa-berukir',
				text: 'Mangkok tempurung kelapa berukir ini merupakan produk unik yang terbuat dari bahan kelapa asli, dipahat dengan motif tradisional yang indah dan kaya akan nilai budaya. Setiap mangkok dibuat dengan tangan oleh para pengrajin terampil yang mengerti seni dan tradisi lokal, sehingga setiap produk memiliki karakteristik dan detail yang khas. Mangkok ini cocok digunakan untuk menyajikan berbagai hidangan, seperti nasi, sup, atau bahkan sebagai wadah makanan ringan. Keindahan ukirannya menambah estetika meja makan Anda, menjadikan setiap hidangan terasa lebih spesial dan berkelas.\n\nSelain memiliki nilai estetika yang tinggi, mangkok tempurung kelapa berukir ini juga ramah lingkungan. Bahan dasar yang digunakan merupakan hasil daur ulang dari tempurung kelapa yang biasanya dianggap sebagai limbah. Dengan memanfaatkan tempurung kelapa, produk ini membantu mengurangi sampah organik dan memberikan nilai tambah pada limbah tersebut. Proses pembuatannya yang alami dan minim penggunaan bahan kimia berbahaya menjadikan mangkok ini pilihan yang baik bagi mereka yang peduli terhadap lingkungan. Dengan memilih produk ini, Anda tidak hanya mendapatkan barang yang cantik dan fungsional, tetapi juga turut berkontribusi dalam menjaga kelestarian lingkungan dan mendukung praktik berkelanjutan.',
				price: 25000,
			},
			{
				title: 'Tempat ATK Ukir dari Bambu',
				slug: 'tempat-atk-ukir-dari-bambu',
				text: 'Tempat ini adalah sebuah tempat Alat Tulis Kantor (ATK) yang diukir dengan indah dari bambu alami. Produk ini tidak hanya berfungsi sebagai wadah untuk menyimpan alat tulis seperti pensil, pulpen, penghapus, dan lainnya, tetapi juga menawarkan estetika alami yang menambah keindahan meja kerja Anda. Dengan desain ukiran yang unik dan artistik, setiap tempat ATK ini memiliki karakteristik tersendiri yang tidak bisa ditemukan di produk lainnya. Penggunaan bambu sebagai bahan dasar memberikan kesan alami dan tradisional, sekaligus menunjukkan kepedulian terhadap lingkungan.\n\nProduk ini sangat ramah lingkungan karena terbuat dari bambu, yang merupakan sumber daya terbarukan dan dapat didaur ulang. Bambu tumbuh lebih cepat dibandingkan dengan pohon kayu biasa, sehingga penggunaannya tidak menyebabkan deforestasi yang berlebihan. Selain itu, proses pembuatan tempat ATK ini dilakukan dengan cara yang ramah lingkungan, mengurangi limbah dan emisi karbon. Dengan memilih produk ini, Anda turut serta dalam upaya menjaga kelestarian lingkungan dan mendukung praktek daur ulang. Tempat ATK dari bambu ini bukan hanya pilihan yang indah dan fungsional, tetapi juga bertanggung jawab terhadap keberlanjutan bumi.',
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
