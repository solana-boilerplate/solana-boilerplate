import { FC } from "react";
import { useMoralis } from "react-moralis";
import { Logo, Button } from "web3uikit";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  const { authenticate } = useMoralis();

  const onConnectWallet = async () => {
    try {
      // @ts-ignore
      await authenticate({ type: "sol", onSuccess: () => {} });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo color="white" theme="icon" />
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="mail">Tokens</Menu.Item>
          <Menu.Item key="app">NFTs</Menu.Item>
        </Menu>
        <Button
          id="test-button"
          onClick={onConnectWallet}
          text="Connect Wallet"
          theme="secondary"
          type="button"
        />
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
