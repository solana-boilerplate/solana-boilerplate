import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LinkTo } from "web3uikit";
import { Layout, Typography } from "antd";
import Quickstart from "./pages/Quickstart";
import Tokens from "./pages/Tokens";
import NFTs from "./pages/NFTs";
import Portfolio from "./pages/Portfolio";
import AppBar from "./components/AppBar";
import MenuBar from "./components/MenuBar";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

interface AppProps {
	isServerInfo?: boolean;
}

const App: FC<AppProps> = (props) => {
	const { isServerInfo = false } = props;

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Header
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingLeft: "3rem",
					paddingRight: "2rem",
				}}
			>
				<AppBar />
			</Header>
			<MenuBar isServerInfo={isServerInfo} />
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
