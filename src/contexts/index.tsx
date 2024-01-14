import { MouseEvent, createContext, useContext } from "react";

export interface InterfacePaginationsModel {
	firstPaginations: {
		totalPages: number;
		numberPage: number;
		handleClick: (
			e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
			liElements: HTMLCollection | undefined,
		) => void;
	};
}

export const PaginationsModel = createContext(
	{} as InterfacePaginationsModel,
);
export const usePaginationsContext = () =>
	useContext(PaginationsModel);
