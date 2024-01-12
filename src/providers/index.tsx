import { FC, PropsWithChildren } from "react";
import {
	InterfacePaginationsModel,
	PaginationsModel,
} from "../contexts";

export const PaginationsProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const value: InterfacePaginationsModel = {
		firstPaginations: {
			numberPage: 0,
			totalPages: 10,
		},
	};
	return (
		<PaginationsModel.Provider value={value}>
			{children}
		</PaginationsModel.Provider>
	);
};
