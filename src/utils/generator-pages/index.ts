export const generatorPages = (totalPages: number) => {
	const pages = Array(totalPages).fill(1);

	for (let i = 1; i < totalPages; i++) {
		pages[i] = pages[i] + pages[i - 1];
	}

	return pages;
};
