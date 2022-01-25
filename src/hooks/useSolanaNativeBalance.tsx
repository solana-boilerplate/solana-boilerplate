import { useEffect } from "react";
import {
	useMoralis,
	useMoralisSolanaApi,
	useMoralisSolanaCall,
} from "react-moralis";

interface UseSolanaNativeBalanceReturn {
	getSolanaNativeBalance: any;
	data: any;
	error: Error | null;
	isLoading: boolean;
}

const useSolanaNativeBalance = (): UseSolanaNativeBalanceReturn => {
	const { isInitialized, isAuthenticated } = useMoralis();
	const { account } = useMoralisSolanaApi();
	const {
		fetch: getSolanaNativeBalance,
		data,
		error,
		isLoading,
	} = useMoralisSolanaCall(account?.balance, {
		network: "testnet",
		address: "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2",
	});

	useEffect(() => {
		if (isInitialized && isAuthenticated) {
			getSolanaNativeBalance();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInitialized, isAuthenticated]);

	return { getSolanaNativeBalance, data, error, isLoading };
};

export default useSolanaNativeBalance;
