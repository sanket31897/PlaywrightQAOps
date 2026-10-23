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



test('Network intercepting with api response', async ({ page }) => {
   await page.addInitScript(value => {

      window.localStorage.setItem('token', value);
   }, token);

   //Login
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   const products = page.locator(".card-body");
   const productName = 'ZARA COAT 3';
   const email = "ef@nlk.com";

   //Go to orders page and manipluate reponse body to verify (my orders)behvaiour when there are no orders.
   
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
      async route => {
         const responseBody = await page.request.fetch(route.request());
         let body = JSON.stringify(fakeBody);
         route.fulfill({
            responseBody,
            body,

         });
      });


   //we can abort network calls with .abort method========================================================>
   //await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", route=> route.abort());

   await page.locator("button[routerlink*='myorders']").click();
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   console.log(await page.locator(".mt-4").textContent());
   //await page.waitForTimeout(20000);

});

