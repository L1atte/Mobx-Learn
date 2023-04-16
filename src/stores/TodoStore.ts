import { observable, action, makeObservable, autorun } from "mobx";
import { InitializeStore, StoreManager, StoreMapReturn } from "../state";

class TodoStore<T = any> implements InitializeStore {
	public init() {}
	public todos: Array<{
		task: T;
		completed: boolean;
	}>;

	constructor(tasks?: T[]) {
		this.todos = [];

		makeObservable(this, {
			todos: observable,
			addItem: action.bound,
			reset: action.bound,
			toggle: action.bound,
		});

		autorun(() => console.log(this.todos));

		if (tasks && tasks.length !== 0) {
			for (const i of tasks) {
				this.addItem(i);
			}
		}
	}

	addItem(task: T) {
		this.todos.push({
			task: task,
			completed: false,
		});
	}

	reset() {
		this.todos.length = 0;
	}

	toggle(item: TodoItem) {
		item.completed = !item.completed;
	}
}

export const todoInstance = () => new TodoStore<string>(["coffee", "latte", "mocha"]);

export type TodoItem = ReturnType<typeof todoInstance>["todos"][0];
