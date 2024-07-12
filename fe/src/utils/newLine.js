export function newLine(text) {
	if (typeof text === 'undefined') {
		return [];
	}
	const newText = text.split('\n').map((str) => <p>{str}</p>);
	return newText;
}
