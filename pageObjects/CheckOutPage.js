const {test, expect}= require ('@playwright/test');
class CheckOutPage{


constructor(page){
  this.page=page;
  this.countryField = page.locator("[placeholder*='Country']");
  this.countryDropdown  = page.locator("section.ta-results");
  this.checkoutBtn = page.locator(".user__name.mt-5 a.btnn.action__submit");
  this.orderConfirmationText = page.locator(".hero-primary");
  this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  this.checkoutUserName = page.locator(".user__name.mt-5 [type='text'][style*='color: lightgray']");
}

async enterCountry(){
   await this.countryField.pressSequentially('Ind', { delay: 100 });
   await this.countryDropdown.waitFor();
   const optionsCount = await this.countryDropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {

      const text = await this.countryDropdown.locator("button").nth(i).textContent();
      if (text === ' India') {

         await this.countryDropdown.locator("button").nth(i).click();
         break;
      }

   }
}


   async ClickOnCheckout(){
   await this.checkoutBtn.click();
   }

    async SubmitAndGetOrderId()
    {
     
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}

}

module.exports = { CheckOutPage };