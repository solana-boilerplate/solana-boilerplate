import { FC } from "react";
import { useMoralis } from "react-moralis";
import { Routes, Route, Link } from "react-router-dom";
import { Logo, Button, TabList, Blockie, LinkTo } from "web3uikit";
import { Layout, Typography } from "antd";
import Quickstart from "./pages/Quickstart";
import Tokens from "./pages/Tokens";
import NFTs from "./pages/NFTs";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const { Tab } = TabList;

const App: FC = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const onConnectWallet = async () => {
    try {
      await authenticate({
        // @ts-ignore
        type: "sol",
        onSuccess: () => {},
      });
    } catch (e) {
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
        }}
      >
        <div style={{ paddingTop: "1rem" }}>
          <Logo color="white" theme="icon" />
        </div>
        {isAuthenticated ? (
          <Blockie seed={user?.get("solAddress")} />
        ) : (
          <Button
            id="test-button"
            onClick={onConnectWallet}
            text="Connect Wallet"
            theme="secondary"
            type="button"
          />
        )}
      </Header>
      <Content>
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={<Link to="/">Quickstart</Link>} />
          <Tab tabKey={2} tabName={<Link to="/tokens">Tokens</Link>} />
          <Tab tabKey={3} tabName={<Link to="/nfts">NFTs</Link>} />
        </TabList>
        <div>
          <Routes>
            <Route path="/" element={<Quickstart />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route path="/nfts" element={<NFTs />} />
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
          🙋 You have questions? Ask them on the {""}
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
