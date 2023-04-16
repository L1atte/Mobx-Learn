import { InitializeStore } from "./InitializeStore";

export type StoreMapReturn<T extends Record<string, () => InitializeStore>> = {
	[K in keyof T]: ReturnType<T[K]>;
};
