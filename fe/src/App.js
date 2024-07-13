import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getMe } from './features/authSlice';
import About from './pages/About';
import Account from './pages/Account';
import Articles from './pages/Articles';
import ArticleView from './pages/ArticleView';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import ProductView from './pages/ProductView';
import { loadScripts } from './utils/loadScripts';

function App() {
	useEffect(() => {
		const scripts = ['/assets/js/main.js'];

		loadScripts(scripts);
	}, []);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/article/:slug" element={<ArticleView />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:slug" element={<ProductView />} />
					<Route path="/about" element={<About />} />
					<Route path="/account" element={<Account />} />
					{/* <Route path="edit/:id" element={<EditUser />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
