import { FC } from "react";
import { FirstPaginations } from "./components";
import { PaginationsProvider } from "./providers";

export const App: FC = () => (
	<PaginationsProvider>
		<FirstPaginations />
	</PaginationsProvider>
);
