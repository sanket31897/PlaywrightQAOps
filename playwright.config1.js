// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { workers } from 'node:cluster';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  retries:1,
  workers:15,
  timeout: 30000,
  expect: {
    timeout: 10000
  },
      reporter: 'html',
      projects:[
        {

        name:"safari",
  use: {
       actionTimout: 3000,
       navigationTimout: 1500,
       screenshot :'on',
       trace :  'on',                                //'retain-on-failure',
       browserName: "webkit",
       headless: false,
       ...devices['iPad Pro 11 landscape'],
       permissions:['geolocation'],
       ignoreHttpsErrors: true,
  },

 },

{
       name:"edge",
  use: {
       actionTimout: 3000,
       navigationTimout: 1500,
       screenshot :'on',
       trace :  'on',    
       video:'retain-on-failure',                          //'retain-on-failure',
       browserName: "chromium",
       channel: 'msedge',
       headless: true,
  },


},
{
       name:"chrome",
  use: {
       actionTimout: 3000,
       navigationTimout: 1500,
       screenshot :'on',
       video:'retain-on-failure',
       trace :  'on',                                //'retain-on-failure',
       browserName: "chromium",
       headless: false,
       viewport:{width: 1080, height:1080},
       permissions:['geolocation'],
       ignoreHttpsErrors: true,
  },


}



]

});

module.exports = config
