import { createContext, useContext } from "react";

interface InterfacePaginationsModel {
	firstPaginations: {
		totalPages: number;
		numberPage: number;
	};
}

export const PaginationsModel = createContext(
	{} as InterfacePaginationsModel,
);
export const usePaginationsContext = () =>
	useContext(PaginationsModel);
