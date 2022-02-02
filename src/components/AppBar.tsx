import { FC, useState } from "react";
import { useMoralis } from "react-moralis";
import { Typography } from "antd";
import { Logo, Button, getEllipsisTxt, Modal, Blockie } from "web3uikit";
import useSolana from "../hooks/useSolana";

const { Text } = Typography;

const AppBar: FC = () => {
	const { authenticate, logout, isAuthenticated } = useMoralis();
	const { account } = useSolana();
	const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);

	/**
	 * @description
	 * Connecting to Solana supported wallets,
	 * currently only available with Phantom Wallet
	 */
	const onConnectWallet = async () => {
		try {
			await authenticate({
				// @ts-ignore
				type: "sol",
				onSuccess: () => {},
			});
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};

	/**
	 * @description Logging out and disconnecting Solana Wallet
	 */
	const onDisconnectWallet = async () => {
		try {
			await logout();
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};

	return (
		<>
			{isAuthenticated && isUserModalOpen && (
				<Modal
					cancelText="Disconnect Wallet"
					isVisible={isUserModalOpen}
					okText="Go to Explorer"
					onCancel={onDisconnectWallet}
					onOk={() => {}}
					title=""
				>
					<div />
					<div
						style={{
							alignItems: "center",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Blockie seed={account} size={16} />
						<Text style={{ marginTop: "1rem" }}>{account}</Text>
					</div>
				</Modal>
			)}
			<div style={{ paddingTop: "1rem" }}>
				<Logo color="white" theme="icon" />
			</div>
			<Button
				id="test-button"
				onClick={isAuthenticated ? () => setIsUserModalOpen(true) : onConnectWallet}
				text={isAuthenticated ? getEllipsisTxt(account) : "Connect Wallet"}
				theme="secondary"
				type="button"
			/>
		</>
	);
};

export default AppBar;
