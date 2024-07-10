import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './app/store.js';
import { loadScripts } from './utils/loadScripts.js';

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

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Main />
		</Provider>
	</React.StrictMode>
);
