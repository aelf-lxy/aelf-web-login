/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      webpackConfig.module.rules = [
        ...webpackConfig.module.rules,
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ];
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        events: require.resolve('events/'),
        buffer: require.resolve('buffer/'),
      };
      return webpackConfig;
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
    },
  },
  devServer: {
    proxy: {
      '/v1/api': {
        target: 'http://192.168.67.179:5001',
        changeOrigin: true,
        pathRewrite: { '^/v1': '' },
        secure: true,
      },
      '/v2/api': {
        target: 'http://192.168.66.117:5577',
        changeOrigin: true,
        pathRewrite: { '^/v2': '' },
        secure: true,
      },
      '/connect': {
        target: 'https://auth-portkey-test.portkey.finance',
        changeOrigin: true,
        secure: true,
      },
      '/AElfIndexer_DApp/PortKeyIndexerCASchema': {
        // source: '/AElfIndexer_DApp/:path*',
        // target: 'http://192.168.67.172:8083',
        target: 'https://dapp-portkey-test.portkey.finance',
        changeOrigin: true,
        secure: true,
      },
    },
  },
};
