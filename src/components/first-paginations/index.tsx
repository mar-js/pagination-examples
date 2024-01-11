import { FC, MouseEvent, useRef } from "react";
import { generatorPages } from "../../utils";

export const FirstPaginations: FC = () => {
	const refPages = useRef<HTMLUListElement | null>(null);

	let numberPage = 0;
	const totalPages = 10;
	const pages = generatorPages(totalPages);

	const ulElement = refPages.current;
	const liElements = ulElement?.children;

	const handleClick = (
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
	) => {
		const btn = e.target as HTMLButtonElement;

		if (!liElements) return;

		if (typeof liElements[numberPage] === "undefined") return;

		if (btn.name === "btn-right") {
			if (numberPage === totalPages - 1) return;

			numberPage += 1;
			liElements[numberPage].classList.add("active");
		} else {
			if (numberPage === 0) return;

			liElements[numberPage].classList.remove("active");
			numberPage -= 1;
		}
	};

	return (
		<div className="first-paginations">
			<button
				className="arrow-left"
				type="button"
				onClick={handleClick}
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
				onClick={handleClick}
			>
				{">"}
			</button>
		</div>
	);
};
