import { useEffect } from "react";
import {
  useMoralis,
  useMoralisSolanaApi,
  // @ts-ignore
  useMoralisSolanaApiCall,
} from "react-moralis";

const useSolanaNativeBalance = () => {
  const { isInitialized, isAuthenticated } = useMoralis();
  const { account } = useMoralisSolanaApi();
  const {
    fetch: getSolanaNativeBalance,
    data,
    error,
    isLoading,
  } = useMoralisSolanaApiCall(account?.balance, {
    network: "devnet",
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
