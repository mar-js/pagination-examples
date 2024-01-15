import { FC, MouseEvent, PropsWithChildren, useState } from "react";
import {
	InterfacePaginationsModel,
	PaginationsModel,
} from "../contexts";

export const PaginationsProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const [firstPaginations, setFirstPaginations] = useState({
		numberPage: 0,
		totalPages: 10,
	});

	const handleClickFirstPaginations = (
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
		liElements: HTMLCollection | undefined,
	) => {
		const btn = e.target as HTMLButtonElement;

		if (!liElements) return;

		if (btn.name === "btn-right") {
			if (firstPaginations.numberPage === firstPaginations.totalPages)
				return;

			setFirstPaginations((prev) => ({
				...prev,
				numberPage: firstPaginations.numberPage + 1,
			}));

			liElements[firstPaginations.numberPage].classList.add("active");
		} else {
			if (firstPaginations.numberPage === 0) return;

			setFirstPaginations((prev) => ({
				...prev,
				numberPage: firstPaginations.numberPage - 1,
			}));

			if (firstPaginations.numberPage === firstPaginations.totalPages)
				return;

			liElements[firstPaginations.numberPage].classList.remove(
				"active",
			);
		}
	};

	const value: InterfacePaginationsModel = {
		firstPaginations: {
			...firstPaginations,
			handleClick: handleClickFirstPaginations,
		},
	};

	return (
		<PaginationsModel.Provider value={value}>
			{children}
		</PaginationsModel.Provider>
	);
};
