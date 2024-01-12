import { FC, PropsWithChildren } from "react";
import { PaginationsModel } from "../contexts";

export const PaginationsProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	return (
		<PaginationsModel.Provider value="">
			{children}
		</PaginationsModel.Provider>
	);
};
