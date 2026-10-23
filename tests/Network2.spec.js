const { test, expect, request } = require('@playwright/test');
const loginPayload = { userEmail: "ef@nlk.com", userPassword: "GHBmwbMeL2XmhP#" };
let fakeBody = { data: [], message: "No Orders" };
let token;


test.beforeAll(async () => {
   const apiContext = await request.newContext();
   const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
      {
         data: loginPayload,
      },
   );
   await expect(loginResponse.ok()).toBeTruthy();
   const loginResponseJson = await loginResponse.json();
   token = loginResponseJson.token;
   console.log(token);

});



test('Network intercepting with api request URL', async ({ page }) => {
   await page.addInitScript(value => {

      window.localStorage.setItem('token', value);
   }, token);

   //Login
   //page.on('request', request => console.log(request.url()));
   //page.on('response', response => console.log(response.url(), response.status()));
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.locator(".card-body").first().waitFor();

   //Go to orders page and verify if order can be found from order id
   await page.locator("button[routerlink*='myorders']").click();
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
      route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6ac0e0562be7a4bc2b85d63' }));
   await page.locator("button:has-text('View')").first().click();
   await page.waitForTimeout(2000);
   await expect(page.locator(".blink_me").first()).toHaveText("You are not authorize to view this order");
});

