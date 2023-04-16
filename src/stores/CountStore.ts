import { observable, action, makeObservable, autorun } from "mobx";
import { InitializeStore, StoreManager, StoreMapReturn } from "../state";

class CountStore implements InitializeStore {
	count: number;
	public init() {}

	constructor(count?: number) {
		this.count = count ?? 0;
		makeObservable(this, {
			count: observable,
			increase: action.bound,
			sub: action.bound,
			reset: action.bound,
		});

		autorun(() => console.log(this.count));
	}

	increase() {
		this.count = this.count + 1;
	}

	sub() {
		this.count = this.count - 1;
	}

	reset() {
		this.count = 0;
	}
}

export const countInstance = () => new CountStore(1);
