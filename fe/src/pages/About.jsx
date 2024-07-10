import Footer from '../components/Footer';
import Header from '../components/Header';
import '/public/assets/css/about.css';
import '/public/assets/css/contact.css';

function About() {
	return (
		<>
			<div id="page">
				<Header />

				<main className="bg_white">
					<div className="container margin_60_35 add_bottom_30">
						{/* <!-- /row --> */}
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-4 pr-lg-5 text-center d-none d-lg-block">
								<img
									src="/real_assets/img/big-logo.png"
									alt=""
									className="img-fluid no_background_color"
									width="350"
									height="268"
								/>
							</div>
							<div className="col-lg-8">
								<div className="box_about">
									<p className="lead">
										<b>Eco Warriors</b> adalah sebuah website
										eccomerce yang menjual berbagai macam barang daur
										ulang karya tangan masyarakat warga Desa
										Sidapurna, Kecamatan Dukuhturi, Kabupaten Tegal.
										<br />
										<br />
										Produk yang dibuat menggunakan bahan-bahan
										anorganik yang sulit terurai sehingga dapat
										mengurangi sampah untuk menjaga lingkungan. Dibuat
										dengan mengutamakan kegunaan dan keunikan sehingga
										membuat produk memiliki nilai jual yang tinggi dan
										menarik minat beli customer.
									</p>
								</div>
							</div>
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
					<div className="container margin_60">
						<div className="main_title">
							<h2>Tim Kami</h2>
						</div>
						<div className="row small-gutters">
							<div className="col-6 col-md-4 col-xl-4">
								<div className="grid_item">
									<figure>
										<a href="#">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/profiles/aniec.png"
												alt=""
												height="390"
											/>
										</a>
									</figure>
									<h4>Aniec Anafisah P</h4>
									<p className="lead">Designer</p>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-4">
								<div className="grid_item">
									<figure>
										<a href="#">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/profiles/aqila.png"
												alt=""
												height="390"
											/>
										</a>
									</figure>
									<h4>Aqillah Cahya N</h4>
									<p className="lead">Hacker</p>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-4">
								<div className="grid_item">
									<figure>
										<a href="#">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/profiles/lamria.png"
												alt=""
												height="390"
											/>
										</a>
									</figure>
									<h4>Lamria Magdalena</h4>
									<p className="lead">Project Manager</p>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}

							<div className="col-6 col-md-4 col-xl-4">
								<div className="grid_item">
									<figure>
										<a href="#">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/profiles/martha.png"
												alt=""
												height="390"
											/>
										</a>
									</figure>
									<h4>Martha Napitulu</h4>
									<p className="lead">Designer</p>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-4">
								<div className="grid_item">
									<figure>
										<a href="#">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/profiles/afif.png"
												alt=""
												height="390"
											/>
										</a>
									</figure>
									<h4>Musyaffa Afiful U</h4>
									<p className="lead">Hacker</p>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
							<div className="col-6 col-md-4 col-xl-4">
								<div className="grid_item">
									<figure>
										<a href="#">
											<img
												className="img-fluid lazy"
												src="/assets/img/products/product_placeholder_square_medium.jpg"
												data-src="/real_assets/img/profiles/samuel.png"
												alt=""
												height="390"
											/>
										</a>
									</figure>
									<h4>Samuel Sihotang</h4>
									<p className="lead">Hacker</p>
								</div>
								{/* <!-- /grid_item --> */}
							</div>
							{/* <!-- /col --> */}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
					<div className="container margin_60">
						<div className="main_title">
							<h2>Hubungi Kami</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4">
								<div className="box_contacts">
									<i className="ti-tablet"></i>
									<h2>Hubungi Kami</h2>
									<a href="#0">+88015-88888-9999</a>
									<br />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="box_contacts">
									<i className="ti-map-alt"></i>
									<h2>Pusat Eco.Warriors</h2>
									<div>Desa Sidapurna, Kec. Dukuhturi, Kab. Tegal</div>
									<small>Senin sampai Sabtu 08.00-17.00</small>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="box_contacts">
									<i className="ti-email"></i>
									<h2>Email Kami</h2>
									<a href="#0">sampurna@gmail.com</a>
								</div>
							</div>
						</div>
						{/* <!-- /row --> */}{' '}
					</div>
					{/* <!-- /container --> */}{' '}
					<div className="bg_white">
						<div className="container margin_60_35">
							<h4 className="pb-3">Kirim Pesan</h4>
							<div className="row">
								<div className="col-lg-4 col-md-6 add_bottom_25">
									<div className="form-group">
										<input
											className="form-control"
											type="text"
											placeholder="Nama"
										/>
									</div>
									<div className="form-group">
										<input
											className="form-control"
											type="email"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<textarea
											className="form-control"
											style={{ height: '150px' }}
											placeholder="Pesan..."></textarea>
									</div>
									<div className="form-group">
										<input
											className="btn_1 full-width"
											type="submit"
											value="Kirim"
										/>
									</div>
								</div>
								<div className="col-lg-8 col-md-6 add_bottom_25">
									<iframe
										className="map_contact"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15059.828840968452!2d109.08572514391975!3d-6.89762638962415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb988feffa69b%3A0x5027a76e3565cd0!2sSidapurna%2C%20Kec.%20Dukuhturi%2C%20Kabupaten%20Tegal%2C%20Jawa%20Tengah!5e1!3m2!1sid!2sid!4v1716036205766!5m2!1sid!2sid"
										style={{ height: '390px' }}></iframe>
								</div>
							</div>
							{/* <!-- /row --> */}{' '}
						</div>
						{/* <!-- /container --> */}{' '}
					</div>
					{/* <!-- /container --> */}
				</main>
				{/* <!--/main--> */}
				<Footer />
			</div>

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}
		</>
	);
}

export default About;
