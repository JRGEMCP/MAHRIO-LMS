var commonConfig = require('./webpack.common')
  , conf = require('./config.json')
  , webpackMerge = require('webpack-merge')
  , helpers = require('./helpers')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , webpack = require('webpack');

module.exports = webpackMerge( commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('public'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      WPCONFIG: JSON.stringify( conf.DEV )
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});