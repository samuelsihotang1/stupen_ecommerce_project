import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/home_1.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { formatDate } from '../utils/formatDate';
import { formatPrice } from '../utils/formatPrice.js';
import { loadScripts } from '../utils/loadScripts';
import { truncateText } from '../utils/truncateText';

const Homepage = () => {
	const { user } = useSelector((state) => state.auth);
	const [articles, setArticles] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const scripts = ['/assets/js/carousel-home.min.js'];

		loadScripts(scripts);
	}, []);

	useEffect(() => {
		getArticles();
		getProducts();
	}, []);

	const getArticles = async () => {
		try {
			const response = await axios.get('http://localhost:5000/articles/4');
			setArticles(response.data);
		} catch (error) {
			console.error('Error get articles:', error);
		}
	};

	const getProducts = async () => {
		try {
			const response = await axios.get('http://localhost:5000/products/4');
			setProducts(response.data);
		} catch (error) {
			console.error('Error get articles:', error);
		}
	};

	return (
		<>
			<div id="page">
				<Header />
				<main>
					<div id="carousel-home">
						<div className="owl-carousel owl-theme">
							{/* <!--/owl-slide--> */}
							<div
								className="owl-slide cover"
								style={{
									backgroundImage:
										"url('/real_assets/img/slides/banner.png')",
								}}>
								<div
									className="opacity-mask d-flex align-items-center"
									data-opacity-mask="rgba(255, 255, 255, 0)">
									<div className="container">
										<div className="row justify-content-center justify-content-md-start">
											<div className="col-lg-6 static">
												<div className="slide-text white">
													<h2 className="owl-slide-animated owl-slide-title">
														JAGALAH LINGKUNGAN!
													</h2>
													<p className="owl-slide-animated owl-slide-subtitle">
														Mengubah plastik menjadi peluang:
														<br />
														"Satu langkah kecil untuk planet
														yang lebih hijau."
													</p>
													<div className="owl-slide-animated owl-slide-cta">
														{user ? (
															''
														) : (
															<a
																className="btn_1"
																href="/account"
																role="button"
																style={{
																	marginRight: '1vw',
																}}>
																Daftar
															</a>
														)}

														<a
															className={`btn_1 ${
																user ? '' : 'gray'
															}`}
															href="/products"
															role="button">
															Belanja
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="icon_drag_mobile"></div>
					</div>
					{/* <!--/carousel--> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2 style={{ paddingBottom: '2vh' }}>ECO WARRIORS</h2>
							<span>ABOUT</span>
							<p>
								Selamat datang di situs kami, tempat di mana kita berbagi
								semangat untuk menjaga bumi kita dengan mengurangi limbah
								dan memanfaatkan kembali sumber daya yang ada. Tujuan
								utama situs ini adalah untuk mempromosikan kesadaran akan
								pentingnya daur ulang dan memfasilitasi akses mudah ke
								produk-produk ramah lingkungan.
							</p>
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>PRODUK PILIHAN</h2>
							<span>UTAMA</span>
						</div>
						<div className="row small-gutters">
							{products.map((product, index) => (
								<div
									key={product.slug}
									className="col-6 col-md-4 col-xl-3">
									<div className="grid_item">
										<figure>
											<a href={'/product/' + product.slug}>
												<img
													className="img-fluid lazy"
													src={`/real_assets/img/products/${product.imageproducts[0].image}`}
													alt=""
												/>
											</a>
										</figure>
										<a href={'/product/' + product.slug}>
											<h3>{product.title}</h3>
										</a>
										<div className="price_box">
											<span className="new_price">
												Rp. {formatPrice(product.price)}
											</span>
										</div>
									</div>
									{/* <!-- /grid_item --> */}
								</div>
							))}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>ARTIKEL</h2>
							<span>TERBARU</span>
						</div>
						<div className="row">
							{articles.map((article, index) => (
								<div key={article.slug} className="col-lg-6">
									<a
										className="box_news"
										href={'/article/' + article.slug}>
										<figure>
											<img
												src={
													'/real_assets/img/articles/' +
													article.image
												}
												alt={article.title}
												width="400"
												height="266"
												className="lazy"
											/>
										</figure>
										<ul>
											<li>{formatDate(article.createdAt)}</li>
										</ul>
										<h4>{article.title}</h4>
										<p>{truncateText(150, article.text)}</p>
									</a>
								</div>
							))}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
				</main>
				{/* <!-- /main --> */}
				<Footer />
			</div>
			{/* <!-- page --> */}

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}
		</>
	);
};

export default Homepage;
