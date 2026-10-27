const { LoginPage } = require('./LoginPage');
const { DashBoardPage } = require('./DashBoardPage');
const { CartPage } = require('./CartPage');
const {CheckOutPage} = require('./CheckOutPage');
const { OrdersHistoryPage } = require ('./OrdersHistoryPage');

class POManager {

    constructor(page) {
        this.page = page;
        this.login = new LoginPage(this.page);
        this.dashBoardPage = new DashBoardPage(this.page);
        this.cartpage = new CartPage(this.page);
        this.checkoutpage = new CheckOutPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    }


    getLogin() {

        return this.login;
    }

    getDahsboard(){
        return this.dashBoardPage;
    }

    getCartPage(){
        return this.cartpage;
    }

    getCheckoutPage(){
        return this.checkoutpage;
    }

    getOrdersHistoryPage(){
        return this.ordersHistoryPage;
    }


}

module.exports = { POManager };