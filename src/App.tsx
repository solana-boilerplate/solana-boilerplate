import { FC } from "react";
import { useMoralis } from "react-moralis";
import { Routes, Route, NavLink } from "react-router-dom";
import { Logo, Button, LinkTo, getEllipsisTxt } from "web3uikit";
import { Layout, Typography, Menu } from "antd";
import Quickstart from "./pages/Quickstart";
import Tokens from "./pages/Tokens";
import NFTs from "./pages/NFTs";
import Portfolio from "./pages/Portfolio";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

interface AppProps {
	isServerInfo?: boolean;
}

const App: FC<AppProps> = (props) => {
	const { isServerInfo = false } = props;
	const { authenticate, logout, isAuthenticated, user } = useMoralis();

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
		<Layout style={{ minHeight: "100vh" }}>
			<Header
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingLeft: "2rem",
					paddingRight: "2rem",
				}}
			>
				<div style={{ paddingTop: "1rem" }}>
					<Logo color="white" theme="icon" />
				</div>
				<Button
					id="test-button"
					onClick={isAuthenticated ? onDisconnectWallet : onConnectWallet}
					text={
						isAuthenticated && user?.get("solAddress")
							? getEllipsisTxt(user?.get("solAddress"))
							: "Connect Wallet"
					}
					theme="secondary"
					type="button"
				/>
			</Header>
			<div
				style={{
					backgroundColor: "white",
					position: "sticky",
					top: 0,
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
				}}
			>
				<Menu selectedKeys={["quickstart"]} mode="horizontal">
					<Menu.Item key="quickstart">
						<NavLink to="/">Quickstart</NavLink>
					</Menu.Item>
					{isServerInfo && (
						<>
							<Menu.Item key="tokens">
								<NavLink to="/tokens">Tokens</NavLink>
							</Menu.Item>
							<Menu.Item key="nfts">
								<NavLink to="/nfts">NFTs</NavLink>
							</Menu.Item>
							<Menu.Item key="portfolio">
								<NavLink to="/portfolio">Portfolio</NavLink>
							</Menu.Item>
						</>
					)}
				</Menu>
			</div>
			<Content>
				<div style={{ padding: "2rem" }}>
					<Routes>
						<Route path="/" element={<Quickstart isServerInfo={isServerInfo} />} />
						{isServerInfo && (
							<>
								<Route path="/tokens" element={<Tokens />} />
								<Route path="/nfts" element={<NFTs />} />
								<Route path="/portfolio" element={<Portfolio />} />
							</>
						)}
					</Routes>
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				<Text style={{ display: "block" }}>
					⭐️ Please star this{" "}
					<LinkTo
						address="https://github.com/solana-boilerplate/solana-boilerplate/"
						text="boilerplate"
						type="external"
					/>
					, every star makes us very happy!
				</Text>
				<Text style={{ display: "block" }}>
					🙋 You have questions? Ask them on the
					<LinkTo
						address="https://forum.moralis.io/t/solana-boilerplate-questions/8637"
						text="Moralis Forum"
						type="external"
					/>
				</Text>
				<Text style={{ display: "block" }}>
					📖 Read more about{" "}
					<LinkTo
						address="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
						text="Moralis"
						type="external"
					/>
				</Text>
			</Footer>
		</Layout>
	);
};

export default App;
