import { useEffect } from "react";
import {
  useMoralis,
  useMoralisSolanaApi,
  useMoralisSolanaCall,
} from "react-moralis";
import { SolanaHooksOptions } from "../types/SolanaHooksOptions";

const useSolanaPortfolio = (options: SolanaHooksOptions) => {
  const { isInitialized, isAuthenticated } = useMoralis();
  const { account } = useMoralisSolanaApi();
  const {
    fetch: getSolanaPortfolio,
    data,
    error,
    isLoading,
  } = useMoralisSolanaCall(account?.getPortfolio, options);

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      getSolanaPortfolio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, isAuthenticated]);

  return { getSolanaPortfolio, data, error, isLoading };
};

export default useSolanaPortfolio;
