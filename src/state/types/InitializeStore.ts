import { StoreManager } from "../classes/StoreManager";
import { Stores } from "../manager";

export interface InitializeStore {
	init: (manager: StoreManager<Stores>) => Promise<void> | void;
	reset?: () => void;
}
