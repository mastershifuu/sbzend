const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_tests.js',
  timeout: 10000,
  output: './output',
  helpers: {
    Protractor: {
      url: 'https://www.sbzend.ssls.com/',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: false
    }
  },
  include: {
    I: './steps_file.js',
    "commonStep": "./steps/common_steps.js",
    "loginStep": "./steps/login_steps.js",
    "profileStep": "./steps/profile_steps.js",
  },
  bootstrap: false,
  mocha: {},
  name: 'test',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
