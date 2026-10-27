const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));
const { customtest } = require('../utils/custom-testdata.js');

//test.describe.configure({mode:'parallel'});
for (const data of dataset) {
   test(`@Web Register and Login for ${data.productName}`, async ({ page }) => {
      const poManager = new POManager(page);
      const login = poManager.getLogin();
      const products = page.locator(".card-body");
      //Go to URL
      await login.goTO();
      //Login
      await login.Login(data.username, data.password);

      //Search for a product and add to cart
      const dashBoardPage = poManager.getDahsboard();
      await dashBoardPage.searchProduct(data.productName);
      //Navigate to Cart page
      await dashBoardPage.navigateToCart();

      const cartpage = poManager.getCartPage();
      //Validate if the added product is visible in cart page
      await expect(cartpage.addedProduct.filter({ hasText: data.productName })).toBeVisible();
      //Navigate to Checkout Page
      await cartpage.NavigateToCheckoutPage();

      const checkoutpage = poManager.getCheckoutPage();
      //enter country and validate if username is correct on checkout page
      await checkoutpage.enterCountry();
      await expect(checkoutpage.checkoutUserName).toHaveText(data.username);
      //Click on Checkout
      await checkoutpage.ClickOnCheckout();

      await checkoutpage.SubmitAndGetOrderId();
      const orderId = await checkoutpage.SubmitAndGetOrderId();
      console.log(orderId);

      const ordersHistoryPage = poManager.getOrdersHistoryPage();
      await ordersHistoryPage.navigateToOrders();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

   });

}



customtest('Register and Login', async ({ page, testDataforOrder }) => {
   const poManager = new POManager(page);
   const login = poManager.getLogin();
   const products = page.locator(".card-body");
   //Go to URL
   await login.goTO();
   //Login
   await login.Login(testDataforOrder.username, testDataforOrder.password);

   //Search for a product and add to cart
   const dashBoardPage = poManager.getDahsboard();
   await dashBoardPage.searchProduct(testDataforOrder.productName);
   //Navigate to Cart page
   await dashBoardPage.navigateToCart();

   const cartpage = poManager.getCartPage();
   //Validate if the added product is visible in cart page
   //await expect(cartpage.addedProduct).toBeVisible();
   await expect(cartpage.addedProduct.filter({ hasText: testDataforOrder.productName })).toBeVisible();
   //Navigate to Checkout Page
   await cartpage.NavigateToCheckoutPage();

   const checkoutpage = poManager.getCheckoutPage();
   //enter country and validate if username is correct on checkout page
   await checkoutpage.enterCountry();
   await expect(checkoutpage.checkoutUserName).toHaveText(testDataforOrder.username);
   //Click on Checkout
   await checkoutpage.ClickOnCheckout();
});