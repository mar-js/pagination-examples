import { useEffect, useState } from "react";

export const useDebounce = ({ value, time }) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(
			() => {
				setDebouncedValue(value);
			},
			time || 1000,
		);

		return () => clearInterval(handler);
	}, [value, time]);

	return { debouncedValue };
};
