const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {},
    options.output,
  ),
  optimization: options.optimization,
  module: {
    rules: options.module.rules.concat([
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ])
  },
  plugins: options.plugins.concat([
    new CopyWebpackPlugin([ { from: 'src/static' } ]),
  ]),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      '@': path.join(__dirname, '../src'),
    }
  },
  devtool: options.devtool,
  performance: options.performance || {},
  devServer: options.devServer || {},
})
