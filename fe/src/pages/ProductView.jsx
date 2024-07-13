import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/product_page.css';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { formatPrice } from '../utils/formatPrice.js';
import { loadScripts } from '../utils/loadScripts';
import { newLine } from '../utils/newLine';

const ProductView = () => {
	const [product, setProduct] = useState([]);
	const [products, setProducts] = useState([]);
	const { slug } = useParams();
	const [imageproduct, setImageProduct] = useState([]);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const scripts = ['/assets/js/sticky_sidebar.js'];
		loadScripts(scripts);
	}, []);

	useEffect(() => {
		getProduct();
		getProductsbyTotal();
	}, []);

	const getProduct = async () => {
		try {
			const response = await axios.get('http://localhost:5000/product/' + slug);
			setProduct(response.data);
			setImageProduct(response.data.imageproducts);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	const getProductsbyTotal = async () => {
		try {
			const response = await axios.get('http://localhost:5000/products/4');
			setProducts(response.data);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};
	return (
		<>
			<div id="page" class="theia-exception">
				<Header />

				<main>
					<div className="container margin_30">
						<div className="row">
							<div className="col-lg-6 magnific-gallery">
								{imageproduct.map((img, index) => (
									<p>
										<a
											href={`/real_assets/img/products/${img.image}`}
											title={product.title}
											data-effect="mfp-zoom-in">
											<img
												src={`/real_assets/img/products/${img.image}`}
												alt=""
												className="img-fluid"
												style={{
													height: '250px',
													objectFit: 'cover',
													objectPosition: 'center center',
													width: '100%',
													maxHeight: '100%',
												}}
											/>
										</a>
									</p>
								))}
							</div>
							<div className="col-lg-6" id="sidebar_fixed">
								<div className="breadcrumbs">
									<ul>
										<li>
											<a href="/">Home</a>
										</li>
										<li>
											<a href="/products">Products</a>
										</li>
										<li>{product.title}</li>
									</ul>
								</div>
								{/* /page_header */}
								<div className="prod_info">
									<h1
										style={{
											marginTop: '20px',
											marginBottom: '5px',
										}}>
										{product.title}
									</h1>
									<p>{newLine(product.text)}</p>
									<div className="prod_options">
										<div className="row">
											<label className="col-xl-5 col-lg-5  col-md-6 col-6">
												<strong>Quantity</strong>
											</label>
											<div className="col-xl-4 col-lg-5 col-md-6 col-6">
												<div className="numbers-row">
													<input
														type="text"
														defaultValue={1}
														value={quantity}
														onChange={(e) =>
															setQuantity(e.target.value)
														}
														className="qty2"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-5 col-md-6">
											<div className="price_main">
												<span className="new_price">
													Rp. {formatPrice(product.price)}
												</span>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="btn_add_to_cart">
												<a href="#0" className="btn_1">
													Add to Cart
												</a>
											</div>
										</div>
									</div>
								</div>
								{/* /prod_info */}
							</div>
						</div>
						{/* /row */}
					</div>
					{/* /container */}

					<div className="container margin_60_35">
						<div className="main_title">
							<h2>Produk</h2>
							<span>Lainnya</span>
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
													alt={product.title}
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
							))}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* /container */}
				</main>
				{/* /main */}

				<Footer />
			</div>
			{/* <!-- page --> */}

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}

			<div className="top_panel">
				<div className="container header_panel">
					<a href="#0" className="btn_close_top_panel">
						<i className="ti-close" />
					</a>
					<label>{quantity} produk ditambahkan ke keranjang</label>
				</div>
				{/* /header_panel */}
				<div className="item">
					<div className="container">
						<div className="row">
							<div className="col-md-7">
								<div className="item_panel">
									<figure>
										{imageproduct.length > 0 && (
											<img
												src={`/real_assets/img/products/${imageproduct[0].image}`}
												className="lazy"
												alt=""
											/>
										)}
									</figure>
									<h4>
										{quantity}x {product.title}
									</h4>
									<div className="price_panel">
										<span className="new_price">
											Rp. {formatPrice(product.price)}
										</span>
									</div>
								</div>
							</div>
							<div className="col-md-5 btn_panel">
								<a href="cart.html" className="btn_1 outline">
									View cart
								</a>
								<a href="checkout.html" className="btn_1">
									Checkout
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* /item */}
			</div>
			{/* /add_cart_panel */}
		</>
	);
};

export default ProductView;
