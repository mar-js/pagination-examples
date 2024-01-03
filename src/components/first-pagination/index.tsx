import { FC } from "react";
import { generatorPages } from "../../utils";

export const FirstPagination: FC = () => {
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	return (
		<div>
			<button type="button">{"<-"}</button>
			<ul>
				{pages.map((page) => (
					<li key={page}>{page}</li>
				))}
			</ul>
			<button type="button">{"->"}</button>
		</div>
	);
};
