import { useContext } from "react";
import { SolanaContext } from "../context/SolanaContext";

interface UseSolanaReturn {
	account: string;
}

const useSolana = (): UseSolanaReturn => {
	const { account } = useContext(SolanaContext);
	return { account };
};

export default useSolana;
