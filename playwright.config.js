// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  //workers:15,
  //fullyparallel:true,
  retries:1,
  timeout: 50000,
  expect: {
    timeout: 28000
  },
      reporter: 'html',
      
  use: {
       actionTimout: 29000,
       navigationTimout: 18000,
       screenshot :'only-on-failure',
       trace :  'on',  
       video:'retain-on-failure',                              //'on'
       browserName: "chromium",
       channel: 'chrome',
       headless: false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
     viewport: null,

    launchOptions: {
      args: ['--start-maximized']
    }
  },


});

module.exports = config
