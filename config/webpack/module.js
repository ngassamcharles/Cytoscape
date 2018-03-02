'use strict';

const helpers = require('../helpers');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular2-router-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    {
      test: /\.json$/,
      exclude: helpers.root('src/boot/context'),
      loader: 'json-loader'
    },
    {
      test: /\.json$/,
      include: helpers.root('src/boot/context'),
      loader: 'file-loader?name=context/[name].[ext]'
    },
    {
      test: /\.css$/,
      exclude: helpers.root('src/app'),
      use: ExtractTextPlugin.extract({
        use: 'css-loader?sourceMap-loader',
        fallback: 'style-loader?sourceMap-loader'
      })
    },
    {
      test: /\.css$/,
      include: helpers.root('src/app'),
      loader: 'css-to-string-loader!css-loader'
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
      options: {
        minimize: false
      },
      exclude: [helpers.root('src/index.html'), helpers.root('src/mocha.html')]
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
    },
    {
      test: /\.md$/,
      loader: 'html-loader!markdown-loader'
    },
    {
      test: /\.js$/,
      include: helpers.root('src/app/shared/lib'),
      loader: 'script-loader'
    }
  ],
  noParse: [/.+zone\.js\/dist\/.+/]
};
