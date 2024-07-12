import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/blog.css';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { formatDate } from '../utils/formatDate';
import { newLine } from '../utils/newLine';
import { truncateText } from '../utils/truncateText';

const ArticleView = () => {
	const [articles, setArticles] = useState([]);
	const { slug } = useParams();
	const [latestArticles, setLatestArticles] = useState([]);

	const handleSearchChange = (event) => {
		searchArticles(event.target.value);
	};

	const searchArticles = useCallback(async (search) => {
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
	}, []);

	const getArticles = useCallback(async () => {
		try {
			const response = await axios.get('http://localhost:5000/article/' + slug);
			setArticles(response.data);
		} catch (error) {
			console.error('Error fetching articles:', error);
		}
	}, [slug]);

	useEffect(() => {
		getArticles();
		searchArticles();
	}, [getArticles, searchArticles]);

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
									<li>
										<a href="/articles">Artikel</a>
									</li>
									<li>{articles.title}</li>
								</ul>
							</div>
						</div>
						{/* /page_header */}
						<div className="row">
							<div className="col-lg-9">
								<div className="singlepost">
									<figure>
										<img
											alt=""
											className="img-fluid"
											src={
												'/real_assets/img/articles/' +
												articles.image
											}
											style={{
												height: '280px',
												objectFit: 'cover',
												objectPosition: 'center center',
												width: '100%',
												maxHeight: '100%',
											}}
										/>
									</figure>
									<h1>{articles.title}</h1>
									<div className="post-content">
										<div className="dropcaps">
											<p>{newLine(articles.text)}</p>
										</div>
									</div>
									{/* /post */}
								</div>
								{/* /single-post */}
							</div>
							{/* /col */}
							<aside className="col-lg-3">
								<div className="widget search_blog">
									<div className="form-group">
										<input
											type="text"
											onChange={handleSearchChange}
											className="form-control"
											placeholder="Cari.."
										/>
										<button type="submit">
											<i className="ti-search" />
										</button>
									</div>
								</div>
								{/* /widget */}
								<div className="widget">
									<div className="widget-title">
										<h4>Artikel Terbaru</h4>
									</div>
									<ul className="comments-list">
										{latestArticles.map((article, index) => (
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
								{/* /widget */}
							</aside>
							{/* /aside */}
						</div>
						{/* /row */}
					</div>
					{/* /container */}
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

export default ArticleView;
