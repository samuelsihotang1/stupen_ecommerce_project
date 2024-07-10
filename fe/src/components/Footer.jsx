const Footer = () => {
	return (
		<footer className="revealed">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<h3 data-bs-target="#collapse_1">Jagalah Lingkungan !</h3>
						<div className="collapse dont-collapse-sm links" id="collapse_1">
							<ul>
								<li>
									<p className="white-text">
										Mengubah plastik menjadi peluang:
										<br />
										Satu langkah kecil untuk bumi yang lebih hijau.
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<h3 data-bs-target="#collapse_3">Hubungi Kami</h3>
						<div
							className="collapse dont-collapse-sm contacts"
							id="collapse_3">
							<ul>
								<li>
									<i className="ti-home"></i>Desa Sidapurna, Kec.
									Dukuhturi,
									<br />
									Kab. Tegal
								</li>
								<li>
									<i className="ti-headphone-alt"></i>
									+88015-88888-9999
								</li>
								<li>
									<i className="ti-email"></i>
									<a href="#0">sampurna@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6">
						<h3 data-bs-target="#collapse_2">Menu</h3>
						<div className="collapse dont-collapse-sm links" id="collapse_2">
							<ul>
								<li>
									<a href="listing-grid-1-full.html">Edukasi</a>
								</li>
								<li>
									<a href="listing-grid-2-full.html">Produk</a>
								</li>
								<li>
									<a href="listing-grid-1-full.html">Tentang</a>
								</li>
								<li>
									<a href="listing-grid-3.html">Kontak</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6">
						<h3 data-bs-target="#collapse_4">Ikuti Kami</h3>
						<div className="collapse dont-collapse-sm" id="collapse_4">
							<div className="follow_us">
								<ul>
									<li>
										<a href="#0">
											<i className="bi bi-facebook"></i>
										</a>
									</li>
									<li>
										<a href="#0">
											<i className="bi bi-twitter-x"></i>
										</a>
									</li>
									<li>
										<a href="#0">
											<i className="bi bi-instagram"></i>
										</a>
									</li>
									<li>
										<a href="#0">
											<i className="bi bi-tiktok"></i>
										</a>
									</li>
									<li>
										<a href="#0">
											<i className="bi bi-whatsapp"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /row--> */}
				<hr />
				<div className="row">
					<div className="col-lg-12">
						<ul className="additional_links centering_additional_links">
							<li>
								<span>© Copyright 2024. All right reserved</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
