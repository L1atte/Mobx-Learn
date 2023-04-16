import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createManager } from "./state";
import { ManagerContext } from "./state";

const manager = createManager();
await manager.init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ManagerContext.Provider value={manager}>
			<App />
		</ManagerContext.Provider>
	</React.StrictMode>,
);
