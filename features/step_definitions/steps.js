const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const { expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

Given('a Login to Ecommerce Application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {

    this.username = username;
    //Go to URL
    await this.login.goTO();
    //Login
    await this.login.Login(username, password);

});

When('Add {string} to cart', { timeout: 100 * 1000 }, async function (productName) {
    //Search for a product and add to cart
    const dashBoardPage = this.poManager.getDahsboard();
    await dashBoardPage.searchProduct(productName);
    //Navigate to Cart page
    await dashBoardPage.navigateToCart();
});

Then('Verify {string} is displayed in the cart', { timeout: 100 * 1000 }, async function (productName) {
    const cartpage = this.poManager.getCartPage();
    //Validate if the added product is visible in cart page
    await expect(cartpage.addedProduct.filter({ hasText: productName })).toBeVisible();
    //Navigate to Checkout Page
    await cartpage.NavigateToCheckoutPage();
});

When('Enter Valid details and Place the Order', async function () {
    const checkoutpage = this.poManager.getCheckoutPage();
    //enter country and validate if username is correct on checkout page
    await checkoutpage.enterCountry();
    await expect(checkoutpage.checkoutUserName).toHaveText(this.username);
    //Click on Checkout
    await checkoutpage.ClickOnCheckout();

    await checkoutpage.SubmitAndGetOrderId();
    const orderId = await checkoutpage.SubmitAndGetOrderId();
    this.orderId = orderId;
    console.log(orderId);
});

Then('Verify order is present in Order History Page', async function () {
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.navigateToOrders();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);

    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});



Given('a Login to Ecommerce2 Application with {string} and {string}', { timeout: 30 * 1000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());

    //CSS enter username and password
    await this.page.locator('#username').fill(username);
    await this.page.locator("[name='password']").fill(password);
    await this.page.locator('#signInBtn').click();
});

Then('Verify error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    //to extract text from web element and print it in console
    console.log(await this.page.locator("[style*='block']").textContent());
    //assertion which checks if particular text contains
    //get extracted text and compare it with partial text passed in assertion
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});


