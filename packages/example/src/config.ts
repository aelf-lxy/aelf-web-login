import { event$, setGlobalConfig } from 'aelf-web-login';

const APPNAME = 'explorer.aelf.io';
const WEBSITE_ICON = 'https://explorer.aelf.io/favicon.main.ico';
const CHAIN_ID = 'tDVW';
const NETWORK: string = 'MAIN'; //'TESTNET';
const IS_MAINNET = NETWORK === 'MAIN';
// portkey ip docs: https://hoopox.feishu.cn/wiki/GjdWwSqc3imGYxkE85bc8KEFnFd
const RPC_SERVER = 'https://explorer.aelf.io/chain';

const graphQLServer = 'http://192.168.67.67:8083/AElfIndexer_DApp';

// did.config.setConfig
export const connectUrl = 'http://192.168.66.62:8055/graphql';

let portkeyScanUrl = `${graphQLServer}/Portkey_DID/PortKeyIndexerCASchema/graphql`;
// portkeyScanUrl = '/AElfIndexer_DApp/PortKeyIndexerCASchema/graphql';

setGlobalConfig({
  appName: APPNAME,
  chainId: CHAIN_ID,
  networkType: NETWORK as any,
  defaultRpcUrl: RPC_SERVER,
  portkey: {
    loginConfig: {
      recommendIndexes: [0, 1],
      loginMethodsOrder: ['Google', 'Telegram', 'Apple', 'Phone', 'Email'],
    },
    useLocalStorage: true,
    graphQLUrl: portkeyScanUrl,
    connectUrl: connectUrl,
    requestDefaults: {
      baseURL: '/v1',
      timeout: 30000,
    },
    socialLogin: {
      Portkey: {
        websiteName: APPNAME,
        websiteIcon: WEBSITE_ICON,
      },
    },
  } as any,
  portkeyV2: {
    networkType: NETWORK as any,
    aphQLUrl: 'http://192.168.67.214:8083/AElfIndexer_DApp/PortKeyIndexerCASchema/graphql',
    connectUrl: 'http://192.168.66.117:8080',
    questDefaults: {
      bseURL: '/v2',
      tmeout: 30000,
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
  onlyShowV2: false,
});
