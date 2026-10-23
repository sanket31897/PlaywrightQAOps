const eventBase = require('@playwright/test');
const {expect} = require('@playwright/test');


exports.customeETest = eventBase.test.extend({

authPage: async({browser}, use)=>{
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://eventhub.rahulshettyacademy.com/login");
      await page.locator("#email").fill("sanket@mail.com");
      await page.locator("#password").fill("Sanket*31897");
      await page.locator("#login-btn").click();
      await page.waitForLoadState("networkidle");
      await use(page);

},


TestDate :{
    EventFirst : "Concert"
},



});