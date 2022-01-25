import { useEffect } from "react";
import {
	useMoralis,
	useMoralisSolanaApi,
	useMoralisSolanaCall,
} from "react-moralis";

const useSPLNFTBalance = () => {
	const { isInitialized, isAuthenticated } = useMoralis();
	const { account } = useMoralisSolanaApi();
	const {
		fetch: getSPLNFTBalance,
		data,
		error,
		isLoading,
	} = useMoralisSolanaCall(account?.getNFTs, {
		network: "testnet",
		address: "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2",
	});

	useEffect(() => {
		if (isInitialized && isAuthenticated) {
			getSPLNFTBalance();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInitialized, isAuthenticated]);

	return { getSPLNFTBalance, data, error, isLoading };
};

export default useSPLNFTBalance;
