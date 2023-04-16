import { StoreManager } from "./classes/StoreManager";
import { StoreMapReturn } from "./types/StoreMapReturn";
import { todoInstance } from "../stores/TodoStore";
import { countInstance } from "../stores/CountStore";

const stores = {
	todoInstance,
	countInstance,
};
type Stores = StoreMapReturn<typeof stores>;

const createManager = () => new StoreManager(stores);

export type { Stores };
export { createManager };
