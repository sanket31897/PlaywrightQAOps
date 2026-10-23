const { test, expect } = require('@playwright/test')
let webContext;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("ef@nlk.com");
    await page.locator("#userPassword").fill("GHBmwbMeL2XmhP#");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
    await context.close();

});


test('first test case', async () => {
    const page = await webContext.newPage();
    
    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    const email = "ef@nlk.com"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator(".card-body h5").nth(0).waitFor();
    const allTitles = await page.locator(".card-body h5").allTextContents();
    console.log(allTitles);
    //console.log(await page.locator(".card-body h5").nth(0).textContent());
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;

        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    await expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();

    await page.locator("[placeholder*='Country']").pressSequentially('Ind', { delay: 100 });
    const dropdown = page.locator("section.ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {

        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === ' India') {

            await dropdown.locator("button").nth(i).click();
            break;
        }

    }

    await expect(page.locator(".user__name.mt-5 [type='text'][style*='color: lightgray']")).toHaveText(email);
    //Parent to child element example
    // parent - class - .user__name.mt-5  Child - tagname.classname - a.btnn.action__submit
    await page.locator(".user__name.mt-5 a.btnn.action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    //console.log(rowsCount);

    for (let i = 0; i < await rows.count(); ++i) {

        const ordId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(ordId)) {
            await rows.nth(i).locator("button").first().click();
            console.log("Sanket")
            break;
        }
    }
    const orderIdDetails = await page.locator("div.col-text.-main").textContent();
    await expect(orderId.includes(orderIdDetails)).toBeTruthy();


});


test('dropdown tests', async () => {
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator(".card-body h5").nth(0).waitFor();
    const allTitles = await page.locator(".card-body h5").allTextContents();
    console.log(allTitles);

});