import { useEffect } from "react";
import {
  useMoralis,
  useMoralisSolanaApi,
  useMoralisSolanaCall,
} from "react-moralis";

const useSPLTokenBalance = () => {
  const { isInitialized, isAuthenticated } = useMoralis();
  const { account } = useMoralisSolanaApi();
  const {
    fetch: getSPLTokenBalance,
    data,
    error,
    isLoading,
  } = useMoralisSolanaCall(account?.getSPL, {
    network: "testnet",
    address: "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2",
  });

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      getSPLTokenBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, isAuthenticated]);

  return { getSPLTokenBalance, data, error, isLoading };
};

export default useSPLTokenBalance;
