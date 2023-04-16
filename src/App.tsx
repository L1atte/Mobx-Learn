import reactLogo from "./assets/react.svg";
import "./App.css";
import { useStores } from "./state";
import { TodoItem } from "./stores/TodoStore";
import { observer } from "mobx-react";

const App = observer(() => {
	const { countInstance } = useStores();

	return (
		<div className="App">
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src="/vite.svg"
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://reactjs.org"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card"></div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>

			<h1>Todo List</h1>
			<div>
				<button onClick={countInstance.increase}>ADD</button>
			</div>
			<div>
				<button onClick={countInstance.reset}>RESET</button>
			</div>
			<div>{countInstance.count}</div>
		</div>
	);
});

export default App;
