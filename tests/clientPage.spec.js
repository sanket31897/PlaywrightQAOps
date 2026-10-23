const {test, expect}= require('@playwright/test');




test('Register and Login', async({page})=>{
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   //await page.locator(".login-wrapper-footer-text a").click();
   const firstName = page.locator("[placeholder='First Name']");
   const lastName = page.locator("[placeholder='Last Name']");
const emailId = page.locator("[placeholder='email@example.com']");
const phNumber = page.locator("[placeholder='enter your number']");
const passwd = page.locator("[placeholder='Passsword']");
const confirmPw= page.locator("[placeholder='Confirm Passsword']");
const ageCheckbox = page.locator("[type='checkbox']");
const registerBtn = page.locator("input.btn.btn-block.login-btn");
const loginBtn = page.locator("button.btn.btn-primary");
const loginPw= page.locator("[placeholder='enter your passsword']");


const products = page.locator(".card-body");
const productName = 'ZARA COAT 3';
const email = "ef@nlk.com"


//Register
// await firstName.fill("Sanket");
// await lastName.fill("CRI");
// await emailId.fill("sanketpc3789y@gmail.com");
// await phNumber.fill("7875564409");
// await passwd.fill("Sanket@12346");
// await confirmPw.fill("Sanket@12346");
// await ageCheckbox.click();
// await registerBtn.click();

//Navigate to Login Page
//await loginBtn.click();

//Login
await emailId.fill(email);
await loginPw.fill("GHBmwbMeL2XmhP#");
await page.locator(".btn.btn-block.login-btn").click();
// it will wait until all network calls are completed or network activity gets idle
//await page.waitForLoadState('networkidle');

//it will wait for a specific single element to be visible
await page.locator(".card-body h5").nth(0).waitFor();
const allTitles= await page.locator(".card-body h5").allTextContents();
console.log(allTitles);
//console.log(await page.locator(".card-body h5").nth(0).textContent());

const count = await products.count();
for(let i=0; i<count; ++i){
   if(await products.nth(i).locator("b").textContent()===productName)
      {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;

   }
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
await expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();

await page.locator("[placeholder*='Country']").pressSequentially('Ind', { delay: 100 });
const dropdown = page.locator("section.ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
for(let i=0; i<optionsCount; ++i){

   const text = await dropdown.locator("button").nth(i).textContent();
   if(text ===' India'){
         
         await dropdown.locator("button").nth(i).click();
         break;
   }

}

await expect(page.locator(".user__name.mt-5 [type='text'][style*='color: lightgray']")).toHaveText(email);
//Parent to child element example
// parent - class - .user__name.mt-5  Child - tagname.classname - a.btnn.action__submit
await page.locator(".user__name.mt-5 a.btnn.action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
//console.log(rowsCount);

for(let i=0; i<await rows.count(); ++i){

   const ordId = await rows.nth(i).locator("th").textContent();
   if(orderId.includes(ordId)){
      await rows.nth(i).locator("button").first().click();
      console.log("Sanket")
      break;
   }
}
const orderIdDetails = await page.locator("div.col-text.-main").textContent();
await expect(orderId.includes(orderIdDetails)).toBeTruthy();
//await page.pause();
});








test('dropdown tests',async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
const sdropdown= page.locator("#dropdown-class-example");
//await sdropdown.selectOption('option2');
await sdropdown.selectOption({ label: 'Option2' });
await expect(sdropdown).toHaveValue('option2');
await expect(page.locator("input#displayed-text")).toBeVisible();
await page.locator("input#hide-textbox").click();
await expect(page.locator("input#displayed-text")).toBeHidden();
page.on('dialog',dialog=>dialog.accept());
await page.locator("input#confirmbtn.btn-style").click();

await page.getByPlaceholder("Enter Your Name").fill("SANKET");
await page.locator("input#alertbtn.btn-style").click();

await page.locator("button#mousehover").hover();
await page.locator(".mouse-hover-content a[href*='top']").click();

//sam.wilson@gmail.com
//Samavenger@999

});