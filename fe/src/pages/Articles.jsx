import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/blog.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { formatDate } from '../utils/formatDate';
import { truncateText } from '../utils/truncateText';

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [LatestArticles, setLatestArticles] = useState([]);

	useEffect(() => {
		getArticles();
		searchArticles();
	}, []);

	const handleSearchChange = (event) => {
		searchArticles(event.target.value);
	};

	const searchArticles = async (search) => {
		try {
			let response;
			if (search === '' || search === undefined || search === null) {
				response = await axios.get('http://localhost:5000/articles/5');
			} else {
				response = await axios.get(
					'http://localhost:5000/article/latest/' + search
				);
			}
			setLatestArticles(response.data);
		} catch (error) {
			console.error('Error searching articles:', error);
		}
	};

	const getArticles = async () => {
		try {
			const response = await axios.get('http://localhost:5000/articles');
			setArticles(response.data);
		} catch (error) {
			console.error('Error get articles:', error);
		}
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
									<li>Artikel</li>
								</ul>
							</div>
							<h1>Artikel</h1>
						</div>
						{/* <!-- /page_header --> */}
						<div className="row">
							<div className="col-lg-9">
								<div className="widget search_blog d-block d-sm-block d-md-block d-lg-none">
									<div className="form-group">
										<input
											type="text"
											onChange={handleSearchChange}
											className="form-control"
											placeholder="Cari.."
										/>
										<button type="submit">
											<i className="ti-search"></i>
										</button>
									</div>
								</div>
								{/* <!-- /widget --> */}
								<div className="row">
									{/*  */}
									{articles.map((article, index) => (
										<div key={article.slug} className="col-md-6">
											<article className="blog">
												<figure>
													<a href={'/article/' + article.slug}>
														<img
															src={
																'/real_assets/img/articles/' +
																article.image
															}
															alt={article.title}
														/>
														<div className="preview">
															<span>
																Baca lebih lanjut...
															</span>
														</div>
													</a>
												</figure>
												<div className="post_info">
													<small>
														{formatDate(article.createdAt)}
													</small>
													<h2>
														<a
															href={
																'/article/' + article.slug
															}>
															{article.title}
														</a>
													</h2>
													<p>
														{truncateText(150, article.text)}
													</p>
												</div>
											</article>
											{/* <!-- /article --> */}
										</div>
									))}
								</div>
								{/* <!-- /row --> */}

								{/* <div className="pagination__wrapper no_border add_bottom_30">
									<ul className="pagination">
										<li>
											<a
												href="#0"
												className="prev"
												title="previous page">
												&#10094;
											</a>
										</li>
										<li>
											<a href="#0" className="active">
												1
											</a>
										</li>
										<li>
											<a href="#0">2</a>
										</li>
										<li>
											<a href="#0">3</a>
										</li>
										<li>
											<a href="#0">4</a>
										</li>
										<li>
											<a
												href="#0"
												className="next"
												title="next page">
												&#10095;
											</a>
										</li>
									</ul>
								</div> */}
								{/* <!-- /pagination --> */}
							</div>
							{/* <!-- /col --> */}

							<aside className="col-lg-3">
								<div className="widget search_blog d-none d-sm-none d-md-none d-lg-block">
									<div className="form-group">
										<input
											type="text"
											onChange={handleSearchChange}
											className="form-control"
											placeholder="Search.."
										/>
										<button type="submit">
											<i className="ti-search"></i>
										</button>
									</div>
								</div>
								{/* <!-- /widget --> */}
								<div className="widget">
									<div className="widget-title">
										<h4>Artikel Terbaru</h4>
									</div>
									<ul className="comments-list">
										{LatestArticles.map((article, index) => (
											<li key={article.slug}>
												<div className="alignleft">
													<a href={'/article/' + article.slug}>
														<img
															src={
																'/real_assets/img/articles/' +
																article.image
															}
															alt={truncateText(
																50,
																article.title
															)}
														/>
													</a>
												</div>
												<small>
													{formatDate(article.createdAt)}
												</small>
												<h3>
													<a
														href={'/article/' + article.slug}
														title={truncateText(
															50,
															article.title
														)}>
														{truncateText(50, article.title)}
													</a>
												</h3>
											</li>
										))}
									</ul>
								</div>
								{/* <!-- /widget --> */}
							</aside>
							{/* <!-- /aside --> */}
						</div>
						{/* <!-- /row --> */}
					</div>
					{/* <!-- /container --> */}
				</main>
				{/* <!--/main--> */}
				<Footer />
			</div>
			{/* <!-- page --> */}

			<div id="toTop"></div>
			{/* <!-- Back to top button --> */}
		</>
	);
};

export default Articles;
