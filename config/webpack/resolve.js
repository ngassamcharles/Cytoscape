'use strict';

const helpers = require('../helpers');

module.exports = {
  /*
   * An array of extensions that should be used to resolve modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
   */
  extensions: ['.ts', '.js', '.json'],

  // An array of directory names to be resolved to the current directory
  modules: [helpers.root('src'), 'node_modules'],

  alias: {
      'jquery': helpers.root('node_modules/jquery/dist/jquery.js') //https://github.com/Dogfalo/materialize/issues/3707
  }
};
