'use strict';

const helpers = require('../helpers');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');

module.exports = [

  new webpack.optimize.CommonsChunkPlugin({
    name: 'polyfills',
    chunks: ['polyfills']
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['main'],
    minChunks: function (module) {
      return module.resource
        && (module.resource.startsWith(nodeModules)
          || module.resource.startsWith(genDirNodeModules)
          || module.resource.startsWith(realNodeModules));
    }
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: ['polyfills', 'vendor'].reverse()
  }),

  new ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /\@angular(\\|\/)core(\\|\/)esm5/,
    helpers.root('src') // location of your src
  ),

  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    "root.jQuery": "jquery",
    '_': 'lodash'
  }),

  new webpack.NoEmitOnErrorsPlugin(),

  new ProgressPlugin(),

  new HtmlWebpackPlugin({
    template: 'index.html',
    chunksSortMode: 'dependency',
    inject: 'head',
    favicon : helpers.root('src/assets/favicon.png')
  }),

  new CopyWebpackPlugin([
    {
      from: 'assets',
      to: 'assets',
      ignore: ['favicon.png']
    }
  ]),

  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer'
  })
];
