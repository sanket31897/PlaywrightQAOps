const {customeETest} = require('../utils/eventFix.js');
const {expect} = require('@playwright/test');



customeETest('Browse Events Page', async({authPage, TestDate})=>{
  
await authPage.goto("https://eventhub.rahulshettyacademy.com/");
await authPage.locator("div a span").last().click();
await authPage.waitForTimeout(500);



});