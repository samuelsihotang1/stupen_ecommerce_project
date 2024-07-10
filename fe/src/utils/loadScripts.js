const loadedScripts = {};

export function loadScripts(scripts, callback) {
	const promises = scripts.map((script) => {
		if (!loadedScripts[script]) {
			return new Promise((resolve) => {
				const scriptElement = document.createElement('script');
				scriptElement.src = script;
				scriptElement.async = true;
				scriptElement.onload = () => {
					loadedScripts[script] = true;
					resolve();
				};
				document.body.appendChild(scriptElement);
			});
		}
		return Promise.resolve();
	});

	Promise.all(promises).then(() => {
		if (callback) {
			callback();
		}
	});
}
