var webpack = require('webpack')
  , helpers = require('./helpers')
  , HTMLPlugin = require('html-webpack-plugin')
  , CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin)
  , LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/vendor.js',
    styles: './src/app/core/styles/core.scss',
    main: './src/main.js'
  },

  resolve: {
    extensions: ['', '.js'],
    root: helpers.root('src'),
    moduleDirectories: ['bower_components', 'node_modules']
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['raw']
    },{
      exclude: /core.scss/,
      test: /\.scss$/,
      loaders: ['raw','sass']
    },{
      include: /core.scss/,
      test: /\.scss$/,
      loaders: ['style','css','sass']
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        'plugins': ['lodash']
      }
    },{
      test: /\.html/,
      loader: 'raw-loader'
    },{
      test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=assets/fonts/[name].[ext]'
    }]
  },

  sassLoader: {
    includePaths: [
      helpers.root('src/app/core/styles/'),
      helpers.root('bower_components/')
    ]
  },

  plugins: [
    new LodashModuleReplacementPlugin,
    new HTMLPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main','vendor','styles']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: 'inline',
      filename: 'inline.js',
      sourceMapFilename: 'inline.map'
    })
  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}