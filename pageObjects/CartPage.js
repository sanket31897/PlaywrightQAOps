class CartPage{


    constructor(page){
     this.page= page;
     this.addedProduct= page.locator("h3");
     this.checkOutBtn = page.getByText('Checkout', { exact: true });
    }


    async NavigateToCheckoutPage(){
        await this.checkOutBtn.click();
    }


}

module.exports= {CartPage};