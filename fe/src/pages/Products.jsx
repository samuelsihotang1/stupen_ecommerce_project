import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/listing.css';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { formatPrice } from '../utils/formatPrice.js';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		try {
			const response = await axios.get('http://localhost:5000/products');
			setProducts(response.data);
		} catch (error) {
			console.error('Error get products:', error);
		}
	};

	return (
		<>
			<div id="page">
				<Header />
				<main>
					<div className="container margin_30_5">
						<div className="page_header" style={{ marginBottom: 0 }}>
							<div className="breadcrumbs">
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>Produk</li>
								</ul>
							</div>
							<h1>Produk</h1>
						</div>
					</div>
					{/* <!-- /page_header --> */}

					<div id="stick_here"></div>
					<div className="toolbox">
						<div className="container">
							<ul className="clearfix">
								<li>
									<div className="sort_select">
										<select name="sort" id="sort">
											<option value="popularity" selected>
												Urutkan berdasarkan Terbaru
											</option>
											<option value="rating">
												Urutkan berdasarkan Terkait
											</option>
											<option value="date">
												Urutkan berdasarkan Terlaris
											</option>
											<option value="price">
												Urutkan berdasarkan Harga
											</option>
										</select>
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- /toolbox --> */}

					<div className="container margin_30">
						<div className="row small-gutters">
							{products.map((product, index) => (
								<div
									key={product.slug}
									className="col-6 col-md-4 col-xl-3">
									<div className="grid_item">
										<figure>
											<a href={'/product/' + product.slug}>
												{product.imageproducts.length > 0 && (
													<img
														className="img-fluid lazy"
														src={`/real_assets/img/products/${product.imageproducts[0].image}`}
														alt={product.title}
													/>
												)}
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

export default Products;
