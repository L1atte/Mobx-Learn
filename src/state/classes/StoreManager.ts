class StoreManager<T extends Record<PropertyKey, any>> {
	public stores: T = {} as any;

	constructor(public instantiations: { [K in keyof T]: () => T[K] }) {
		for (const [name, creator] of Object.entries(instantiations)) {
			this.stores[name as keyof T] = creator();
		}
	}

	public async init() {
		await Promise.all(Object.values(this.stores).map(x => x.init(this)));
	}

	public reset() {
		for (const store of Object.values(this.stores)) {
			if (store.reset) store.reset();
		}
	}
}

export { StoreManager };
