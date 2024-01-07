import { FC, useRef, useState } from "react";
import { generatorPages } from "../../utils";

export const FirstPaginations: FC = () => {
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	const [numberPage, setNumberPage] = useState(0);

	const refPages = useRef(null);

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
