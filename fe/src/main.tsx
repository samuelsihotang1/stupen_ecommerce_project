import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { loadScripts } from './utils/loadScripts.ts';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
