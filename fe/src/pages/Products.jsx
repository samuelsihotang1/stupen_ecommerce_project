import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/listing.css';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { formatPrice } from '../utils/formatPrice.js';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [sortOption, setSortOption] = useState('latest');

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		try {
			const response = await axios.get('http://localhost:5000/products');
			let sortedProducts = [...response.data];

			if (sortOption === 'latest') {
				sortedProducts.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				);
			} else if (sortOption === 'oldest') {
				sortedProducts.sort(
					(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
				);
			} else if (sortOption === 'cheaper') {
				sortedProducts.sort((a, b) => a.price - b.price);
			} else if (sortOption === 'moreexpensive') {
				sortedProducts.sort((a, b) => b.price - a.price);
			}

			setProducts(sortedProducts);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	const handleSortChange = (event) => {
		setSortOption(event.target.value);
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
										<select
											name="sort"
											id="sort"
											value={sortOption}
											onChange={handleSortChange}>
											<option value="latest">
												Urutkan berdasarkan Terbaru
											</option>
											<option value="oldest">
												Urutkan berdasarkan Terlama
											</option>
											<option value="cheaper">
												Urutkan berdasarkan Harga Termurah
											</option>
											<option value="moreexpensive">
												Urutkan berdasarkan Harga Termahal
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
