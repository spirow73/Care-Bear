export function getDaysInMonth(year, month) {
	const numDays = new Date(year, month + 1, 0).getDate();
	return Array.from({ length: numDays }, (_, i) => i + 1);
}

export function getBlankDays(year, month) {
	const firstDayOfMonth = new Date(year, month, 1).getDay();
	return Array(firstDayOfMonth).fill(null);
}
