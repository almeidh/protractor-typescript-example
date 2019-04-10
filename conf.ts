import { Config } from 'protractor';
import { JUnitXmlReporter } from 'jasmine-reporters'
const { SpecReporter } = require('jasmine-spec-reporter');


export let config: Config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--disable-gpu']
    }
  },
  specs: ['../target/tests/*.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare() {
    jasmine.getEnv().clearReporters();
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new JUnitXmlReporter({ consolidateAll: true,
      savePath: 'test-results/jasmine', filePrefix: 'test-results'}));
  }
};