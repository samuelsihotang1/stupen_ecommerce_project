export function formatPrice(price) {
	if (price == null) {
		return 'N/A';
	}
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
