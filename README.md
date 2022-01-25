<p align="center">
  <img src="https://moralis.io/wp-content/uploads/2021/04/Moralis-Logo.svg" style="height: 100px;" />
  <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" style="height: 100px;" />
  <img src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsolanaLogoMark.17260911.svg&w=128&q=75" style="height: 100px;"/>
</p>

# Solana Boilerplate
Lightweight boilerplate for Solana dapps. Allows quick building and prototyping.

# ⭐️ `Star us`
If this repo helps you building your dapps on Solana - please ensure you leave us a star! This motivates and helps us a lot to bring more free code, templates and boilerplates to you. 

# 🤝 `Need help?`
If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. [Forum link](https://forum.moralis.io/t/solana-boilerplate-questions/8637). The best thing about this boilerplate is the super active community ready to help at any time! We help each other.

# 🚀 Quick Start

📄 Clone or fork `solana-boilerplate`:
```sh
git clone https://github.com/solana-boilerplate/solana-boilerplate.git
```
💿 Install all dependencies:
```sh
cd solana-boilerplate
yarn install 
```
✏ Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server)) 
Example:
```tsx
REACT_APP_MORALIS_APPLICATION_ID=xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL=https://xxxxxx.grandmoralis.com:2053/server
```
🚴‍♂️ Run your App:
```sh
yarn start
```

# 🧭 Table of contents

- [Solana Boilerplate](#solana-boilerplate)
- [🚀 Quick Start](#-quick-start)
- [🧭 Table of contents](#-table-of-contents)
- [🏗 Solana Components](#-solana-components)
- [🧰 Solana Hooks](#-solana-hooks)
  - [`useSolana`](#usesolana)
  - [`useSolanaNativeBalance`](#usesolananativetokenbalance)
  - [`useSPLTokenBalance`](#usespltokenbalance)
  - [`useSPLNFTBalance`](#usesplnftbalance)
  - [`useSolanaPortfolio`](#usesolanaportfolio)

# 🏗 Solana Components

# 🧰 Solana Hooks

### `useSolana`

Gets basic Solana information such as user's address.

**Example**

```tsx
const { account } = useSolana();
```

### `useSolanaNativeTokenBalance`

Gets Solana SOL token balance of an address.

**Example**

```tsx
const { getSolanaNativeBalance, data, error, isLoading } = useSolanaNativeTokenBalance({
  network: "mainnet",
  address: "xxx"
});
```

### `useSPLTokenBalance`

Gets Solana SPL token balance of an address.

**Example**

```tsx
const { getSPLTokenBalance, data, error, isLoading } = useSPLTokenBalance({
  network: "mainnet",
  address: "xxx"
});
```

### `useSPLNFTBalance`

Gets Solana NFT balance of an address.

**Example**

```tsx
const { getSPLNFTBalance, data, error, isLoading } = useSPLNFTBalance({
  network: "mainnet",
  address: "xxx"
});
```

### `useSolanaPortfolio`

Gets Solana portfolio (SOL, SPL token, SPL NFT) of an address.

**Example**

```tsx
const { getSolanaPortfolio, data, error, isLoading } = useSolanaPortfolio({
  network: "mainnet",
  address: "xxx"
});
```
