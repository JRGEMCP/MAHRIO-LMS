var commonConfig = require('./webpack.common')
  , conf = require('./config.json')
  , webpackMerge = require('webpack-merge')
  , helpers = require('./helpers')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , webpack = require('webpack');

module.exports = webpackMerge( commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('public/assets/'),
    publicPath: './assets/',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      WPCONFIG: JSON.stringify( conf.PROD )
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});