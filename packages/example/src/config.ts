import { setGlobalConfig } from 'aelf-web-login';

const APPNAME = 'explorer.aelf.io';
const WEBSITE_ICON = 'https://explorer.aelf.io/favicon.main.ico';
const CHAIN_ID = 'tDVW';
const NETWORK: string = 'TESTNET';
const IS_MAINNET = NETWORK === 'MAIN';

const RPC_SERVER = 'https://explorer-test.aelf.io/chain';

const graphQLServer = !IS_MAINNET
  ? 'https://dapp-portkey-test.portkey.finance'
  : 'https://dapp-portkey.portkey.finance';

const portkeyApiServer = !IS_MAINNET
  ? 'https://did-portkey-test.portkey.finance'
  : 'https://did-portkey.portkey.finance';

// did.config.setConfig
export const connectUrl = !IS_MAINNET
  ? 'https://auth-portkey-test.portkey.finance'
  : 'https://auth-portkey.portkey.finance';

let portkeyScanUrl = `${graphQLServer}/Portkey_DID/PortKeyIndexerCASchema/graphql`;
// portkeyScanUrl = '/AElfIndexer_DApp/PortKeyIndexerCASchema/graphql';

setGlobalConfig({
  appName: APPNAME,
  chainId: CHAIN_ID,
  networkType: NETWORK as any,
  defaultRpcUrl: RPC_SERVER,
  portkey: {
    useLocalStorage: true,
    graphQLUrl: portkeyScanUrl,
    connectUrl: connectUrl,
    socialLogin: {
      Portkey: {
        websiteName: APPNAME,
        websiteIcon: WEBSITE_ICON,
      },
    },
    network: {
      defaultNetwork: NETWORK,
    },
  } as any,
  aelfReact: {
    appName: APPNAME,
    nodes: {
      AELF: {
        chainId: 'AELF',
        rpcUrl: RPC_SERVER,
      },
      tDVW: {
        chainId: 'tDVW',
        rpcUrl: RPC_SERVER,
      },
      tDVV: {
        chainId: 'tDVV',
        rpcUrl: 'http://192.168.66.106:8000',
      },
    },
  },
});
