const {test, expect} = require('@playwright/test')




test('event booking',async({page})=>{

//Login
await page.goto("https://eventhub.rahulshettyacademy.com/login");
await page.getByPlaceholder("you@email.com").fill("sam.wilson@gmail.com");
await page.getByPlaceholder("••••••").fill("Samavenger@999");
await page.locator(".login-submit-btn").click();
await expect(page.locator('div a span').filter({ hasText: 'Browse Events' })).toBeVisible();



});