import { FC, useRef, useState } from "react";
import { generatorPages } from "../../utils";

export const FirstPaginations: FC = () => {
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	const [numberPage, setNumberPage] = useState(0);

	const refPages = useRef(null);

	const handleClickLeft = () => {
		const ul = refPages.current;

		if (!ul) return;

		if (!numberPage) return;

		const firstLi = ul.childNodes[numberPage];

		firstLi.classList.remove("active");

		setNumberPage((prev) => prev && prev - 1);
		console.log("AA", numberPage);
	};

	const handleClickRight = () => {
		const ul = refPages.current;

		if (!ul) return;

		if (totalPages === numberPage) return;

		const firstLi = ul.childNodes[numberPage];

		firstLi.classList.add("active");

		setNumberPage((prev) => prev + 1);
		console.log("AA", numberPage);
	};

	return (
		<div className="first-paginations">
			<button
				className="arrow-left"
				type="button"
				onClick={handleClickLeft}
			>
				{"<"}
			</button>
			<ul ref={refPages} className="pages">
				{pages.map((page) => (
					<li className="page" key={page}>
						{page}
					</li>
				))}
			</ul>
			<button
				className="arrow-right"
				type="button"
				onClick={handleClickRight}
			>
				{">"}
			</button>
		</div>
	);
};