import { FC, useRef } from "react";
import { generatorPages } from "../../utils";

export const FirstPaginations: FC = () => {
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	const refPages = useRef(null);

	const handleClick = () => {
		const ul = refPages.current;

		if (!ul) return;

		const firstLi = ul.childNodes[0];

		firstLi.classList.add("active");
	};

	return (
		<div className="first-paginations">
			<button className="arrow-left" type="button">
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
				onClick={handleClick}
			>
				{">"}
			</button>
		</div>
	);
};
