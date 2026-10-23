const {test, expect, request} = require ('@playwright/test');
const loginPayload = {userEmail:"ef@nlk.com",userPassword:"GHBmwbMeL2XmhP#"};
const orderPayoad = {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};
let orderSuccessMsg;
let token;
let orderId;

test.beforeAll( async ()=>{
   const apiContext = await request.newContext();
   const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
      {
            data:loginPayload,  
      },
   );
   await expect(loginResponse.ok()).toBeTruthy();
   const loginResponseJson = await loginResponse.json();
   token = loginResponseJson.token;
   console.log(token); 

   //Create order api request
   const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
          data: orderPayoad,
          headers:{
                 "authorization": token,
                  "content-type": "application/json",

          },
   },
);
      const orderResponseJson = await orderResponse.json();
      console.log(orderResponseJson);
      orderId = orderResponseJson.orders[0];
      console.log(orderId);
      orderSuccessMsg = orderResponseJson.message;

});



test('Register and Login', async({page})=>{
await page.addInitScript(value=> {

window.localStorage.setItem('token',value);
}, token);

//Login
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const products = page.locator(".card-body");
const productName = 'ZARA COAT 3';
const email= "ef@nlk.com";
//Go to orders page and verify if order can be found from order id
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = page.locator("tbody tr");
//console.log(rowsCount);

await rows.filter({hasText: orderId}).getByRole("button", {name: "View"}).click();

// for(let i=0; i<await rows.count(); ++i){

//    const ordId = await rows.nth(i).locator("th").textContent();
//    if(orderId===ordId){
//       await rows.nth(i).locator("button").first().click();
//       console.log("Sanket")
//       break;
//    }
// }

const orderIdDetails = await page.locator("div.col-text.-main").textContent();
await expect(orderId.includes(orderIdDetails)).toBeTruthy();
await expect(orderSuccessMsg).toBe("Order Placed Successfully")
//await page.pause();
});

