import { useContext } from "react";
import { ManagerContext } from "../components/ManagerContext";

const useManager = () => {
	const manager = useContext(ManagerContext);

	if (!manager) {
		throw new Error("No manager in context");
	}

	return manager;
};

export { useManager };
