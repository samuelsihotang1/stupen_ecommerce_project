function Header({ isSticky = true }: { isSticky?: boolean }) {
	return (
		<>
			<header className="version_2">
				<div className="layer"></div>
				{/* <!-- Mobile menu overlay mask --> */}{' '}
				<div className={`main_header ${isSticky ? 'Sticky' : ''}`}>
					<div className="container">
						<div className="row small-gutters">
							<div className="col-xl-3 col-lg-3 d-lg-flex align-items-center">
								<div id="logo">
									<a href="index.html">
										<img
											src="/real_assets/img/logo.png"
											alt=""
											width="100"
											height="35"
										/>
									</a>
								</div>
							</div>
							<nav className="col-xl-6 col-lg-7">
								<a className="open_close" href="javascript:void(0);">
									<div className="hamburger hamburger--spin">
										<div className="hamburger-box">
											<div className="hamburger-inner"></div>
										</div>
									</div>
								</a>
								{/* <!-- Mobile menu button --> */}{' '}
								<div className="main-menu">
									<div id="header_menu">
										<a href="index.html">
											<img
												src="/assets/img/logo_black.svg"
												alt=""
												width="100"
												height="35"
											/>
										</a>
										<a href="#" className="open_close" id="close_in">
											<i className="ti-close"></i>
										</a>
									</div>
									<ul className="centered-menu">
										<li>
											<a href="/" className="show-submenu">
												Beranda
											</a>
										</li>
										<li>
											<a
												href="/article"
												className="show-submenu-mega">
												Artikel
											</a>
										</li>
										<li>
											<a href="/products" className="show-submenu">
												Produk
											</a>
										</li>
										<li>
											<a href="/about" className="show-submenu">
												Tentang
											</a>
										</li>
									</ul>
								</div>
								{/* <!--/main-menu --> */}{' '}
							</nav>
							<div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-end view-only-desktop">
								<ul className="top_tools">
									<li>
										<div className="dropdown dropdown-cart">
											<a href="cart.html" className="cart_bt">
												<strong>2</strong>
											</a>
											<div className="dropdown-menu">
												<ul>
													<li>
														<a href="product-detail-1.html">
															<figure>
																<img
																	src="/assets/img/products/product_placeholder_square_small.jpg"
																	data-src="/real_assets/img/products/tas-botol-plastik-1.png"
																	alt=""
																	width="50"
																	height="50"
																	className="lazy"
																/>
															</figure>
															<strong>
																<span>
																	1x Tas Tutup Botol
																</span>
																Rp. 50.000
															</strong>
														</a>
														<a href="#0" className="action">
															<i className="ti-trash"></i>
														</a>
													</li>
													<li>
														<a href="product-detail-1.html">
															<figure>
																<img
																	src="/assets/img/products/product_placeholder_square_small.jpg"
																	data-src="/real_assets/img/products/hiasan-dinding-gantung.png"
																	alt=""
																	width="50"
																	height="50"
																	className="lazy"
																/>
															</figure>
															<strong>
																<span>
																	1x Hiasan Dinding
																	Gantung
																</span>
																Rp. 20.000
															</strong>
														</a>
														<a href="0" className="action">
															<i className="ti-trash"></i>
														</a>
													</li>
												</ul>
												<div className="total_drop">
													<div className="clearfix">
														<strong>Total</strong>
														<span>Rp. 70.000</span>
													</div>
													<a
														href="cart.html"
														className="btn_1 outline">
														Keranjang
													</a>
													<a
														href="checkout.html"
														className="btn_1">
														Bayar
													</a>
												</div>
											</div>
										</div>
										{/* <!-- /dropdown-cart--> */}{' '}
									</li>
									<li>
										<div className="dropdown dropdown-access">
											<a
												href="account.html"
												className="access_link">
												<span>Account</span>
											</a>
											<div className="dropdown-menu">
												<a href="account.html" className="btn_1">
													Sign In
												</a>
												<ul>
													<li>
														<a href="track-order.html">
															<i className="ti-truck"></i>
															Lacak Pesanan
														</a>
													</li>
													<li>
														<a href="account.html">
															<i className="ti-package"></i>
															Pesanan Anda
														</a>
													</li>
													<li>
														<a href="account.html">
															<i className="ti-user"></i>My
															Profil
														</a>
													</li>
													<li>
														<a href="help.html">
															<i className="ti-help-alt"></i>
															Bantuan
														</a>
													</li>
												</ul>
											</div>
										</div>
										{/* <!-- /dropdown-access--> */}{' '}
									</li>
									<li>
										<a
											href="javascript:void(0);"
											className="search_panel">
											<span>Search</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- /row --> */}{' '}
					</div>
				</div>
				{/* <!-- /main_header --> */}{' '}
			</header>
			{/* <!-- /header --> */}
			<div className="top_panel">
				<div className="container header_panel">
					<a href="#0" className="btn_close_top_panel">
						<i className="ti-close"></i>
					</a>
					<small>Apa yang kamu cari ?</small>
				</div>
				{/* <!-- /header_panel --> */}
				<div className="container">
					<div className="search-input">
						<input type="text" placeholder="Cari produk di sini..." />
						<button type="submit">
							<i className="ti-search"></i>
						</button>
					</div>
				</div>
				{/* <!-- /related --> */}{' '}
			</div>
			{/* <!-- /search_panel --> */}{' '}
		</>
	);
}

export default Header;
