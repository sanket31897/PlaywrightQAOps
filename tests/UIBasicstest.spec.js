const {test, expect}= require('@playwright/test');


test('Browser Playwright Test', async ({browser})=>
    {
      const context = await browser.newContext();
      const page = await context.newPage();
      //page.route("**/*.css", route=>route.abort());
      //page.route("**/*.{jpg,png}", route=>route.abort());
      const userName = page.locator('#username');
      const passwd = page.locator("[name='password']");
      const signIn = page.locator('#signInBtn');
      const cardTitles= page.locator(".card-body a");
      //page.on('request', request=> console.log(request.url()));
      //page.on('response',response=> console.log(response.url(), response.status()));
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      
      //CSS enter username and password
      await userName.fill("rahulshetty");
      await passwd.fill("Learning@830$3mK2");
      await signIn.click();
      //to extract text from web element and print it in console
      console.log(await page.locator("[style*='block']").textContent());
      //assertion which checks if particular text contains
      //get extracted text and compare it with partial text passed in assertion
      await expect(page.locator("[style*='block']")).toContainText('Incorrect');
      //tagname.classname
      //.classname
      //tagname#id
      //#id
      //[attribute='value']
      //[attribute*='partial value']
      //we can also use .fill("")   ---to clear the text from a input field
      await userName.clear();
      //
      await userName.fill("rahulshettyacademy");
      //await userName.type("rahulshettyacademy");
      await signIn.click();
      //First element
      // console.log(await cardTitles.first().textContent());
      // //second element based on Index
      // console.log(await cardTitles.nth(1).textContent());
      // //Last element
      // console.log(await cardTitles.last().textContent());
      //to get text of all the availble elements/cards present in locator
      await expect(cardTitles.first()).toBeVisible();
      const allTitles= await cardTitles.allTextContents();
      console.log(allTitles);

    
});

test.only('UI Controls', async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      const userName = page.locator('#username');
      const passwd = page.locator("[name='password']");
      const signIn = page.locator('#signInBtn');
      const docLink = page.locator("[href*='documents-request']");
      //Select value from a static dropdown
      const dropdown = page.locator("select.form-control");
      await dropdown.selectOption("consult");

      //Select a specific radiobutton
      await page.locator(".radiotextsty").nth(1).click();
      await page.locator("#okayBtn").click();
      await expect(page.locator("div div[class=modal-body]")).toBeHidden();
      console.log(await page.locator(".radiotextsty").nth(1).isChecked());
      await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
      //Select a checkbox
      
      await page.locator("#terms").click();
      let isChecked = await page.locator("#terms").isChecked();
      await expect(page.locator("#terms")).toBeChecked();
      expect(isChecked).toBeTruthy();
      //Unselect/Uncheck a checkbox
      await page.locator("#terms").uncheck();
      let isNotChecked = await page.locator("#terms").isChecked();
      expect(isNotChecked).toBeFalsy();

      //Verify if a link on page is blinking
      //Assert if an element have a specific attribute and value
      await expect(docLink).toHaveAttribute("class","blinkingText");

      //opens up the playwright inspector and pauses the script
      // await page.pause();
      


});




test('Child window handl',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const docLink = page.locator("[href*='documents-request']");

    const [newPage]= await Promise.all([
        context.waitForEvent('page'),
        docLink.click(),
    ])
     const text = await newPage.locator(".red").nth(0).textContent();
     const arrayText = text.split("@")
     const domain = arrayText[1].split(" ")[0]
     console.log(domain);
     await page.locator("#username").fill(domain);
     
     console.log(await page.locator("#username").textContent());

});

