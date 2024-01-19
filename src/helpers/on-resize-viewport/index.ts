export const onResizeViewport = () => {
	const limitViewport = 1600;
	const desktopMediaQuery = matchMedia(
		`(min-width: ${limitViewport}px)`,
	);

	desktopMediaQuery.addEventListener("change", (e) => {
		if (e.matches) {
			console.log("AAA", visualViewport?.width);
		}
	});
};
