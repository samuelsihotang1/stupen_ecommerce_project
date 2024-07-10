interface LoadedScripts {
	[key: string]: boolean;
}

export const loadedScripts: LoadedScripts = {};

export function loadScripts(scripts: string[], callback?: () => void): void {
	const promises = scripts.map((script) => {
		if (!loadedScripts[script]) {
			return new Promise<void>((resolve) => {
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
