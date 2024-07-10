import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { LoginUser, reset } from '../features/authSlice';
import '/public/assets/css/account.css';

function Account() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (user || isSuccess) {
			navigate('/');
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate]);

	const Auth = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(LoginUser({ email, password }));
	};

	return (
		<>
			<div id="page">
				<Header />
				<main className="bg_gray">
					<div className="container margin_30">
						<div className="page_header">
							<div className="breadcrumbs">
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>Akun</li>
								</ul>
							</div>
							<h1>Masuk atau Daftar akun</h1>
						</div>
						{/* /page_header */}
						<div className="row justify-content-center">
							{/* LOGIN */}
							<div className="col-xl-6 col-lg-6 col-md-8">
								<div className="box_account">
									<h3 className="client">Masuk</h3>
									<div className="form_container">
										<div className="form-group">
											<input
												type="email"
												className="form-control"
												name="email"
												id="email"
												placeholder="Email*"
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												name="password_in"
												id="password_in"
												defaultValue=""
												placeholder="Password*"
											/>
										</div>
										<div className="text-center">
											<input
												type="submit"
												defaultValue="Log In"
												className="btn_1 full-width"
											/>
										</div>
									</div>
									{/* /form_container */}
								</div>
								{/* /box_account */}
							</div>
							{/* REGISTER */}
							<div className="col-xl-6 col-lg-6 col-md-8">
								<div className="box_account">
									<h3 className="new_client">Daftar</h3>{' '}
									<div className="form_container">
										<div className="form-group">
											<input
												type="email"
												className="form-control"
												name="email"
												id="email_2"
												placeholder="Email"
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												name="password_in_2"
												id="password_in_2"
												defaultValue=""
												placeholder="Password"
											/>
										</div>
										<div className="form-group">
											<input
												type="password"
												className="form-control"
												name="password_in_2"
												id="password_in_2"
												defaultValue=""
												placeholder="Konfirmasi Password"
											/>
										</div>
										<hr />
										<div className="private box">
											<div className="row no-gutters">
												<div className="col-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Nama"
														/>
													</div>
												</div>
												<div className="col-12">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Alamat Lengkap"
														/>
													</div>
												</div>
											</div>
											{/* /row */}
											<div className="row no-gutters">
												<div className="col-6 pr-1">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Kota"
														/>
													</div>
												</div>
												<div className="col-6 pl-1">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Kode Pos"
														/>
													</div>
												</div>
											</div>
											{/* /row */}
											<div className="row no-gutters">
												<div className="col-6 pr-1">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="Provinsi"
														/>
													</div>
												</div>
												<div className="col-6 pl-1">
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															placeholder="No. Telepon"
														/>
													</div>
												</div>
											</div>
											{/* /row */}
										</div>
										<hr />
										<div className="text-center">
											<input
												type="submit"
												defaultValue="Register"
												className="btn_1 full-width"
											/>
										</div>
									</div>
									{/* /form_container */}
								</div>
								{/* /box_account */}
							</div>
						</div>
						{/* /row */}
					</div>
					{/* /container */}
				</main>
				{/*/main*/}
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_1">Quick Links</h3>
								<div
									className="collapse dont-collapse-sm links"
									id="collapse_1">
									<ul>
										<li>
											<a href="about.html">About us</a>
										</li>
										<li>
											<a href="help.html">Faq</a>
										</li>
										<li>
											<a href="help.html">Help</a>
										</li>
										<li>
											<a href="account.html">My account</a>
										</li>
										<li>
											<a href="blog.html">Blog</a>
										</li>
										<li>
											<a href="contacts.html">Contacts</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_2">Categories</h3>
								<div
									className="collapse dont-collapse-sm links"
									id="collapse_2">
									<ul>
										<li>
											<a href="listing-grid-1-full.html">Clothes</a>
										</li>
										<li>
											<a href="listing-grid-2-full.html">
												Electronics
											</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">
												Furniture
											</a>
										</li>
										<li>
											<a href="listing-grid-3.html">Glasses</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">Shoes</a>
										</li>
										<li>
											<a href="listing-grid-1-full.html">Watches</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_3">Contacts</h3>
								<div
									className="collapse dont-collapse-sm contacts"
									id="collapse_3">
									<ul>
										<li>
											<i className="ti-home" />
											97845 Baker st. 567
											<br />
											Los Angeles - US
										</li>
										<li>
											<i className="ti-headphone-alt" />
											+94 423-23-221
										</li>
										<li>
											<i className="ti-email" />
											<a href="#0">info@allaia.com</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<h3 data-bs-target="#collapse_4">Keep in touch</h3>
								<div
									className="collapse dont-collapse-sm"
									id="collapse_4">
									<div id="newsletter">
										<div className="form-group">
											<input
												type="email"
												name="email_newsletter"
												id="email_newsletter"
												className="form-control"
												placeholder="Your email"
											/>
											<button type="submit" id="submit-newsletter">
												<i className="ti-angle-double-right" />
											</button>
										</div>
									</div>
									<div className="follow_us">
										<h5>Follow Us</h5>
										<ul>
											<li>
												<a href="#0">
													<i className="bi bi-facebook" />
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-twitter-x" />
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-instagram" />
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-tiktok" />
												</a>
											</li>
											<li>
												<a href="#0">
													<i className="bi bi-whatsapp" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* /row*/}
						<hr />
						<div className="row add_bottom_25">
							<div className="col-lg-6">
								<ul className="footer-selector clearfix">
									<li>
										<div className="styled-select lang-selector">
											<select>
												<option value="English" selected>
													English
												</option>
												<option value="French">French</option>
												<option value="Spanish">Spanish</option>
												<option value="Russian">Russian</option>
											</select>
										</div>
									</li>
									<li>
										<div className="styled-select currency-selector">
											<select>
												<option value="US Dollars" selected>
													US Dollars
												</option>
												<option value="Euro">Euro</option>
											</select>
										</div>
									</li>
									<li>
										<img
											src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
											data-src="img/cards_all.svg"
											alt=""
											width={198}
											height={30}
											className="lazy"
										/>
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul className="additional_links">
									<li>
										<a href="#0">Terms and conditions</a>
									</li>
									<li>
										<a href="#0">Privacy</a>
									</li>
									<li>
										<span>© 2024 Allaia</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
				{/*/footer*/}
			</div>
			{/* page */}
			<div id="toTop" />
			{/* Back to top button */}
		</>
	);
}

export default Account;
