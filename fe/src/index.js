import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { loadScripts } from './utils/loadScripts.js';

axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

function Main() {
	const [isScriptLoaded, setIsScriptLoaded] = useState(false);

	useEffect(() => {
		const scripts = ['/assets/js/common_scripts.min.js'];

		loadScripts(scripts, () => {
			setIsScriptLoaded(true);
		});
	}, []);

	return isScriptLoaded ? <App /> : null;
}

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</React.StrictMode>
);
