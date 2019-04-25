const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./webpack.base.config.js')({
  mode: 'development',
  env: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'react-router-dom',
      'react-transition-group',
      'prop-types',
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },

  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: 8001,
    open: true,
    inline: true,
    openPage: '',
    hot: true,
  }
})
