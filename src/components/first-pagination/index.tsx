import { FC } from "react";
import { generatorPages } from "../../utils";

export const FirstPagination: FC = () => {
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	return (
		<div className="first-paginations">
			<button className="arrow-left" type="button">
				{"<"}
			</button>
			<ul className="pages">
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
