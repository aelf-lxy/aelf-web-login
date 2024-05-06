# aelf-web-login - AELF Wallet

## 1. Introduction

Modular TypeScript wallet collection and components for aelf applications.

The entire project consists of four parts: core, wallets, bridge, and starter.

- Core:

  - Base: Wallet adaptation abstract definition, basic functions, tools.

- Wallets:

  - Subclasses implemented based on the parent class: portkeyDiscoverAdapter, portkeyAAdapter, nightElfAdapter, aelfWalletV1.

- Bridge:

  - UI: SignIn panel, discover/nightElf login pop-up, logout confirmation pop-up, styled in SocialDesign, CryptoDesign, Web2Design.
  - Logic:
    - Handling events sent by child wallets, handling functions exposed to the JS API layer, and states.
    - Handling logic related to the UI part.

- Starter:

  - Demo developed based on frameworks like CRA, nextjs, etc.

## 2. Getting Started

### 2.1 Adding aelf-web-login

First you need to get aelf-web-login into your project. This can be done using the following methods:

npm: `npm install aelf-web-login`

yarn: `yarn add aelf-web-login`

pnpm: `pnpm install aelf-web-login`

### 2.2 Basic usage

Init Wallet Instance.

```javascript
const config = {
  wallets: [
    new PortkeyDiscoverWallet({
      networkType: 'MAINNET',
    }),
  ],
};

const { connect } = init(config);

const Demo = () => (
  <Button type="primary" onClick={connect}>
    connect
  </Button>
);
```

## 3.Wallet Adapter for AELF Wallets

You can implement this directly in your wallet, and your wallet will work across AELF apps. For any wallet injected into the window in a browser, browser extension, or mobile app, you no longer need to publish an adapter at all.
