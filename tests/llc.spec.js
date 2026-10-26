import {test,expect} from '@playwright/test';

test.only('@Web Playwright special locators', async({page})=>{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.getByLabel("Check me out if you Love IceCreams!").click();
 await page.getByLabel("Employed").click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByPlaceholder("Password").fill("1234567890");
 await page.getByRole("button",{name:'Submit'}).click();
 expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();
 await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:12000});
 await page.getByRole("link",{name:'Shop'}).click();
 await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add'}).click();
 //await page.waitForTimeout(7000);

});



test('Playwright test level time out', async({page})=>{

 const slowExpect = expect.configure({timeout:12000});
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.getByLabel("Check me out if you Love IceCreams!").click();
 await page.getByRole('radio', { name: 'Employed' }).click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByPlaceholder("Password").fill("1234567890");
 await page.getByRole("button",{name:'Submit'}).click();
 expect(await page.getByText("Success! The Form has been submitted successfully!.").isVisible()).toBeTruthy();
 await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
 await page.getByRole("link",{name:'Shop'}).click();
 await slowExpect(page.locator(".my-4").first()).toContainText("Shop");
 await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add'}).click();
 await page.locator('a.nav-link.btn.btn-primary').filter({ hasText: 'Checkout' }).click();
 await page.getByRole("button",{name:'Checkout'}).click();
await page.waitForLoadState('networkidle');
 await page.getByLabel("Please choose your delivery location.").pressSequentially("India",{delay:100});
 await slowExpect(page.locator("div.lds-ellipsis")).toHaveCount(0);
 await page.getByRole("listitem").filter({hasText:'India'}).waitFor();
 await page.getByRole("listitem").filter({hasText:'India'}).click();
await page.getByText('I agree with the term &').click();
await page.getByRole("button",{name:'Purchase'}).click();
await slowExpect(page.getByText("Success!")).toBeVisible();

});