import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => (
	<h2 className="title">{children}</h2>
);
