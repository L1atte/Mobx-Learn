import { createContext } from "react";
import { StoreManager, Stores } from "../index";

const ManagerContext = createContext<StoreManager<Stores> | undefined>(undefined);

export { ManagerContext };
