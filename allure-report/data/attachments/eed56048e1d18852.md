# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: clientPagePO.spec.js >> @Web Register and Login for ADIDAS ORIGINAL
- Location: tests\clientPagePO.spec.js:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h3').filter({ hasText: 'ADIDAS ORIGINAL' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h3').filter({ hasText: 'ADIDAS ORIGINAL' }) with timeout 10000ms
  - waiting for locator('h3').filter({ hasText: 'ADIDAS ORIGINAL' })

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- heading "No Products in Your Cart !" [level=1]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { POManager } = require('../pageObjects/POManager');
  3  | const dataset = JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));
  4  | const {customtest}= require('../utils/custom-testdata.js');
  5  | 
  6  | for(const data of dataset){
  7  | test(`@Web Register and Login for ${data.productName}`, async ({ page }) => {
  8  |    const poManager = new POManager(page);
  9  |    const login = poManager.getLogin();
  10 |    const products = page.locator(".card-body");
  11 |    //Go to URL
  12 |    await login.goTO();
  13 |    //Login
  14 |    await login.Login(data.username, data.password);
  15 | 
  16 |    //Search for a product and add to cart
  17 |    const dashBoardPage = poManager.getDahsboard();
  18 |    await dashBoardPage.searchProduct(data.productName);
  19 |    //Navigate to Cart page
  20 |    await dashBoardPage.navigateToCart();
  21 | 
  22 |    const cartpage = poManager.getCartPage();
  23 |    //Validate if the added product is visible in cart page
> 24 |    await expect(cartpage.addedProduct.filter({hasText:data.productName})).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  25 |    //Navigate to Checkout Page
  26 |    await cartpage.NavigateToCheckoutPage();
  27 |    
  28 |     const checkoutpage = poManager.getCheckoutPage();
  29 |     //enter country and validate if username is correct on checkout page
  30 |     await checkoutpage.enterCountry();
  31 |    await expect(checkoutpage.checkoutUserName).toHaveText(data.username);
  32 |    //Click on Checkout
  33 |    await checkoutpage.ClickOnCheckout();
  34 | 
  35 |    
  36 |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  37 |    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  38 |    console.log(orderId);
  39 |    await page.locator("button[routerlink*='myorders']").click();
  40 |    await page.locator("tbody").waitFor();
  41 |    const rows = await page.locator("tbody tr");
  42 |    //console.log(rowsCount);
  43 | 
  44 |    for (let i = 0; i < await rows.count(); ++i) {
  45 | 
  46 |       const ordId = await rows.nth(i).locator("th").textContent();
  47 |       if (orderId.includes(ordId)) {
  48 |          await rows.nth(i).locator("button").first().click();
  49 |          console.log("Sanket")
  50 |          break;
  51 |       }
  52 |    }
  53 |    const orderIdDetails = await page.locator("div.col-text.-main").textContent();
  54 |    await expect(orderId.includes(orderIdDetails)).toBeTruthy();
  55 |    //await page.pause();
  56 | });
  57 | 
  58 | }
  59 | 
  60 | 
  61 | 
  62 | customtest('Register and Login', async ({ page, testDataforOrder }) => {
  63 |    const poManager = new POManager(page);
  64 |    const login = poManager.getLogin();
  65 |    const products = page.locator(".card-body");
  66 |    //Go to URL
  67 |    await login.goTO();
  68 |    //Login
  69 |    await login.Login(testDataforOrder.username, testDataforOrder.password);
  70 | 
  71 |    //Search for a product and add to cart
  72 |    const dashBoardPage = poManager.getDahsboard();
  73 |    await dashBoardPage.searchProduct(testDataforOrder.productName);
  74 |    //Navigate to Cart page
  75 |    await dashBoardPage.navigateToCart();
  76 | 
  77 |    const cartpage = poManager.getCartPage();
  78 |    //Validate if the added product is visible in cart page
  79 |    await expect(cartpage.addedProduct).toBeVisible();
  80 |    //Navigate to Checkout Page
  81 |    await cartpage.NavigateToCheckoutPage();
  82 |    
  83 |     const checkoutpage = poManager.getCheckoutPage();
  84 |     //enter country and validate if username is correct on checkout page
  85 |     await checkoutpage.enterCountry();
  86 |    await expect(checkoutpage.checkoutUserName).toHaveText(testDataforOrder.username);
  87 |    //Click on Checkout
  88 |    await checkoutpage.ClickOnCheckout();
  89 | });
```