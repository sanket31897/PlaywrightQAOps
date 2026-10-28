const { test, expect, request } = require('@playwright/test');
const loginPlayload = { userEmail: "sanket@mail.com", userPassword: "Sanket@318" };
const orderPayload = { orders: [{ country: "Czech Republic", productOrderedId: "6960eae1c941646b7a8b3ed3" }] };
const { api } = require('../utils/api')
let tokenn;
let orderI;



test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const Api = new api(apiContext, loginPlayload);
    tokenn = await Api.getToken();
    orderI = await Api.getOrderId(orderPayload);

});


test.only('Login and Create order by api', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, tokenn);
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState("networkidle");
    await page.locator("div.card-body").first().waitFor();
    await page.locator("button[routerlink*=myorders]").click();
    const rows = page.locator("tbody tr");

    await rows.filter({ hasText: orderI }).getByRole("button", { name: 'View' }).click();
    const ordID = await page.locator("div.col-text.-main").textContent();
    await expect(orderI.includes(ordID)).toBeTruthy();

})




