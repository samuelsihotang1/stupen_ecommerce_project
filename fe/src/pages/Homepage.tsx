import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '/public/assets/css/home_1.css';

let isScriptLoaded = false;

function Homepage() {
	useEffect(() => {
		if (!isScriptLoaded) {
			// Specific Scripts
			const script = document.createElement('script');
			script.src = '/assets/js/carousel-home.min.js';
			script.async = true;
			document.body.appendChild(script);

			isScriptLoaded = true;

			return () => {
				document.body.removeChild(script);
			};
		}
	}, []);

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
														<a
															className="btn_1"
															href="listing-grid-1-full.html"
															role="button"
															style={{
																marginRight: '1vw',
															}}>
															Daftar
														</a>
														<a
															className="btn_1 gray"
															href="listing-grid-1-full.html"
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
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/tas-botol-plastik-1.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/tas-botol-plastik-1.png"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Tas Tutup Botol</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 50.000</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gantungan-kunci.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gantungan-kunci.png"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Gantungan Kunci</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 25.000</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gaun-kertas.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/gaun-kertas.png"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Gaun Kertas</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 150.000</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-3">
								<div className="grid_item">
									<figure>
										<a href="product-detail-1.html">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding-gantung.png"
												alt=""
											/>
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/products/hiasan-dinding-gantung.png"
												alt=""
											/>
										</a>
									</figure>
									<div className="rating">
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star voted"></i>
										<i className="icon-star"></i>
									</div>
									<a href="product-detail-1.html">
										<h3>Hiasan Dinding Gantung</h3>
									</a>
									<div className="price_box">
										<span className="new_price">Rp. 20.000</span>
									</div>
									<ul>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to favorites">
												<i className="ti-heart"></i>
												<span>Add to favorites</span>
											</a>
										</li>
										<li>
											<a
												href="#0"
												className="tooltip-1"
												data-bs-toggle="tooltip"
												data-bs-placement="left"
												title="Add to cart">
												<i className="ti-shopping-cart"></i>
												<span>Add to cart</span>
											</a>
										</li>
									</ul>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
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
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/bank-sampah.png"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>Minggu, 12 Mei 2024</li>
									</ul>
									<h4>Solusi untuk membantu melestarikan lingkungan</h4>
									<p>
										Bank sampah adalah inisiatif lingkungan yang
										mengumpulkan, mengelola, dan mendaur ulang sampah
										dari masyarakat....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/persoalan-persampahan.png"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>Minggu, 12 Mei 2024</li>
									</ul>
									<h4>Mengatasi Persoalan Persampahan</h4>
									<p>
										Mengatasi persoalan persampahan merupakan upaya
										yang dilakukan untuk mengelola sampah agar tidak
										menjadi masalah....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/ibu-ibu.png"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>Minggu, 12 Mei 2024</li>
									</ul>
									<h4>Ibu-Ibu Rumah Tangga di Sulawesi Tangga</h4>
									<p>
										Ibu-ibu rumah tangga di Sulawesi memiliki peran
										yang sangat penting dalam kehidupan keluarga dan
										komunitas mereka....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
							<div className="col-lg-6">
								<a className="box_news" href="blog.html">
									<figure>
										<img
											src="/assets/img/blog-thumb-placeholder.jpg"
											data-src="/real_assets/img/news/ibu-rumah-tangga.webp"
											alt=""
											width="400"
											height="266"
											className="lazy"
										/>
										<figcaption>
											<strong>12</strong>Mei
										</figcaption>
									</figure>
									<ul>
										<li>Minggu, 12 Mei 2024</li>
									</ul>
									<h4>
										Peran Ganda Ibu Rumah Tangga di Sulawesi dalam
										Kehidupan Modern
									</h4>
									<p>
										Ibu rumah tangga di Sulawesi menghadapi tantangan
										unik dalam kehidupan modern sambil mempertahankan
										tradisi dan budaya lokal....
									</p>
								</a>
							</div>
							{/* <!-- /box_news --> */}
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
}

export default Homepage;
