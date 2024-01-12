import { createContext } from "react";

const PaginationsModel = createContext({});
export const usePaginationsContext = () => PaginationsModel;
