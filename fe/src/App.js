import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Account from './pages/Account';
import Article from './pages/Article';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import { loadScripts } from './utils/loadScripts';

function App() {
	useEffect(() => {
		const scripts = ['/assets/js/main.js'];

		loadScripts(scripts);
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/article" element={<Article />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
					<Route path="/account" element={<Account />} />
					{/* <Route path="edit/:id" element={<EditUser />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
