import { FC } from "react";
import { usePaginationsContext } from "../../contexts";
import { Paginations } from "./paginations";
import { Title } from "./title";

export const FirstPaginations: FC = () => {
	const { firstPaginations } = usePaginationsContext();

	return (
		<section className="first-paginations-container">
			<Title>{firstPaginations.numberPage}</Title>
			<Paginations {...firstPaginations} />
		</section>
	);
};
