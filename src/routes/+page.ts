export function load() {
	let title = '';
	const dateHours = new Date().getHours();
	switch (true) {
		case dateHours >= 0 && dateHours < 12:
			title = 'Good Morning';
			break;
		case dateHours >= 12 && dateHours < 18:
			title = 'Good Afternoon';
			break;
		default:
			title = 'Good Evening';
			break;
	}

	return {
		title: title,
		content: 'hahaha'
	};
}
