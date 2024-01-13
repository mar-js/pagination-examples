import { FC, MouseEvent, useRef } from "react";
import { generatorPages } from "../../../utils";

interface InterfacePaginations {
	totalPages: number;
	handleClick: (
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
		liElements: HTMLCollection | undefined,
	) => void;
}

export const Paginations: FC<InterfacePaginations> = ({
	totalPages,
	handleClick,
}) => {
	const refPages = useRef<HTMLUListElement | null>(null);

	const pages = generatorPages(totalPages);

	const ulElement = refPages.current;
	const liElements = ulElement?.children;

	return (
		<div className="first-paginations">
			<button
				className="arrow-left"
				type="button"
				onClick={(e) => handleClick(e, liElements)}
			>
				{"<"}
			</button>
			<ul ref={refPages} className="pages">
				{pages.map((page) => (
					<li
						className={`${page === 1 ? "page active" : "page"}`}
						key={page}
					>
						{page}
					</li>
				))}
			</ul>
			<button
				className="arrow-right"
				type="button"
				name="btn-right"
				onClick={(e) => handleClick(e, liElements)}
			>
				{">"}
			</button>
		</div>
	);
};
