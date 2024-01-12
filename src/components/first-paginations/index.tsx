import { FC } from "react";
import { usePaginationsContext } from "../../contexts";
import { Paginations } from "./paginations";

export const FirstPaginations: FC = () => {
	const { firstPaginations } = usePaginationsContext();

	return (
		<section>
			'AAA'
			<Paginations {...firstPaginations} />
		</section>
	);
};
