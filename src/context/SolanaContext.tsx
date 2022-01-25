/* eslint-disable react/jsx-no-constructed-context-values */
import { FC, createContext, useMemo } from "react";
import { useMoralis } from "react-moralis";

export const SolanaContext = createContext({
	account: "",
});

export const SolanaContextProvider: FC = (props) => {
	const { children } = props;
	const { user } = useMoralis();
	const account = useMemo(() => user?.get("solAddress") ?? "", [user]);

	return (
		<SolanaContext.Provider value={{ account }}>
			{children}
		</SolanaContext.Provider>
	);
};
