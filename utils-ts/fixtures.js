const base= require('@playwright/test');
const {APiUtils} = require('./APiUtils.js');
const {request } = require('@playwright/test');
const loginPayLoad = { userEmail: "ef@nlk.com", userPassword: "GHBmwbMeL2XmhP#" };
const orderPayLoad = { orders: [{ country: "Czech Republic", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };


exports.customTest = base.test.extend({
authenticatedPage : async ({browser}, use)=>{
const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("ef@nlk.com");
    await page.locator("#userPassword").fill("GHBmwbMeL2XmhP#");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await use(page);

},

createOrder : async ({}, use)=>{
const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   const response =  await apiUtils.createOrder(orderPayLoad);
   await use(response);

},

testDataForOrder :{
   productName : "ADIDAS ORIGINAL"
}


});