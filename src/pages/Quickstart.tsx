import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Illustration } from "web3uikit";
import { Timeline, Typography } from "antd";

const { Text } = Typography;

interface QuickstartProps {
	isServerInfo: boolean;
}

const Quickstart: FC<QuickstartProps> = (props) => {
	const { isServerInfo } = props;
	const navigate = useNavigate();
	return (
		<div style={{ display: "flex", gap: "2rem" }}>
			<div style={{ display: "flex", flex: 3 }}>
				<Card tooltipText="You must complete this before using the boilerplate">
					<Timeline mode="left">
						<Timeline.Item dot="📄">
							<Text delete>
								Clone or fork{" "}
								<a
									href="https://github.com/ethereum-boilerplate/ethereum-boilerplate#-quick-start"
									target="_blank"
									rel="noopener noreferrer"
								>
									ethereum-boilerplate
								</a>{" "}
							</Text>
						</Timeline.Item>

						<Timeline.Item dot="💿">
							<Text delete>
								Install all dependencies: <Text code>npm install</Text>
							</Text>
						</Timeline.Item>

						<Timeline.Item dot="🧰">
							<Text delete={isServerInfo}>
								Sign up for a free account on{" "}
								<a
									href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
									target="_blank"
									rel="noopener noreferrer"
								>
									Moralis
								</a>
							</Text>
						</Timeline.Item>

						<Timeline.Item dot="💾">
							<Text delete={isServerInfo}>
								Create a Moralis Server (
								<a
									href="https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server"
									target="_blank"
									rel="noopener noreferrer"
								>
									How to start Moralis Server
								</a>
								)
							</Text>
						</Timeline.Item>

						<Timeline.Item dot="🔏">
							<Text delete={isServerInfo}>
								Rename <Text code>.env.example</Text> to <Text code>.env</Text> and and
								and and and and provide your <Text strong>appId</Text> and{" "}
								<Text strong>serverUrl</Text>
								from
								<a
									href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
									target="_blank"
									rel="noopener noreferrer"
								>
									Moralis
								</a>
								:
							</Text>
							<Text code delete={isServerInfo} style={{ display: "block" }}>
								REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
							</Text>
							<Text code delete={isServerInfo} style={{ display: "block" }}>
								REACT_APP_MORALIS_SERVER_URL =
								https://xxxxxx.grandmoralis.com:2053/server
							</Text>
						</Timeline.Item>

						<Timeline.Item dot="🔁">
							<Text delete={isServerInfo}>
								Stop the app and start it again <Text code>npm run start</Text>
							</Text>
						</Timeline.Item>

						<Timeline.Item dot="🚀">
							<Text>BUIDL!!!</Text>
						</Timeline.Item>
					</Timeline>
					<div />
				</Card>
			</div>
			<div
				style={{
					display: "flex",
					flex: 1,
					gap: "2rem",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						flex: 1,
						cursor: "pointer",
					}}
					onClick={() => navigate("/tokens")}
				>
					<Card
						description="SPL Token Balance"
						title="SPL Token Balance"
						tooltipText="SPL Token Balance"
					>
						<Illustration height="180px" logo="token" width="100%" />
						<div />
					</Card>
				</div>
				<div
					style={{
						flex: 1,
						cursor: "pointer",
					}}
					onClick={() => navigate("/nfts")}
				>
					<Card
						description="SPL NFT Collection"
						title="SPL NFT Collection"
						tooltipText="SPL NFT Collection"
					>
						<Illustration height="180px" logo="chest" width="100%" />
						<div />
					</Card>
				</div>

				<div
					style={{
						flex: 1,
						cursor: "pointer",
					}}
					onClick={() => navigate("/portfolio")}
				>
					<Card
						description="Solana Portfolio"
						title="Solana Portfolio"
						tooltipText="Solana Portfolio"
					>
						<Illustration height="180px" logo="servers" width="100%" />
						<div />
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Quickstart;
