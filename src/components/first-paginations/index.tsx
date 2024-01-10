import { FC, useRef } from "react";
import { generatorPages } from "../../utils";

export const FirstPaginations: FC = () => {
	const refPages = useRef(null);

	let numberPage = 0;
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	const ulElement = refPages.current;
	const liElements = ulElement?.children;

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
			<button className="arrow-right" type="button">
				{">"}
			</button>
		</div>
	);
};
