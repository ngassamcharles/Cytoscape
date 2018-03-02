// ----- Capabilities to be passed to the webdriver instance ----
//
// For a full list of available capabilities, see
// https://code.google.com/p/selenium/wiki/DesiredCapabilities
// and
// https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
// browserName : android|chrome|firefox|htmlunit|internet explorer|iPhone|iPad|opera|safari|phantomjs


require('ts-node/register');


var helpers = require('./helpers');

var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
var JasmineReporters = require('jasmine-reporters');

exports.config = {
  baseUrl: 'http://localhost:8080/',

  // use `npm run e2e`
  specs: [
    helpers.root('e2e/**/**.e2e.ts'),
    helpers.root('e2e/**/*.e2e.ts')
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['ignore-certificate-errors']
    }
  },

  onPrepare: function() {
    browser.driver.manage().window().setSize(800, 600);

    jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
      savePath: 'reports/e2e',
      consolidateAll: false
    }));

    /*
     * A utiliser pour les navigateurs headless ou debug
     * Sinon mettre en commentaire
     */
     jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
      dest: "reports/e2e/screenshots"
     }));

  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
   useAllAngular2AppRoots: true
};
