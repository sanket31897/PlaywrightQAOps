import {test,expect} from '@playwright/test';



test.only('Client app other ways', async({page})=>{
const products = page.locator(".card-body");
const productName = 'ZARA COAT 3';
const email = "ef@nlk.com";
const passwd = "GHBmwbMeL2XmhP#";    
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.getByPlaceholder("email@example.com").fill(email);
await page.getByPlaceholder("enter your passsword").fill(passwd);
await page.getByRole("button",{name:'Login'}).click();
await page.waitForLoadState('networkidle');
await products.first().waitFor();
await products.filter({hasText:productName}).getByRole("button",{name:' Add To Cart'}).click();


await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();
await page.getByText("ZARA COAT 3").waitFor();
expect(await page.getByText("ZARA COAT 3")).toHaveText(productName);
expect (await page.getByText("ZARA COAT 3")).toBeVisible();
await page.getByRole("button",{name:'Checkout'}).click();
await page.getByPlaceholder("Select Country").pressSequentially("Ind",{delay:100});
await page.getByRole("button",{name:'India'}).nth(1).click();
await page.getByText("Place Order ").click();
expect(await page.getByText("Thankyou for the order.")).toContainText("Thankyou for the order.")
expect(await page.getByText("Thankyou for the order.")).toBeVisible();






});
