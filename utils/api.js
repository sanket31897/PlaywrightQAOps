class api{



constructor(apiContext, loginPlayload){
       this.apiContext= apiContext;
      this.loginPlayload= loginPlayload;
}


async getToken(){
const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: this.loginPlayload
        }
    );

    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    return token;
}


async getOrderId(orderPayload){
     const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    
            {
                data: orderPayload,
                headers: {
                    "authorization": await this.getToken(),
                    "content-type": "application/json",
                }
            }
        );
    
        const orderResponseJson = await orderResponse.json();
        const orderId = orderResponseJson.orders[0];
        return orderId;

}





}

module.exports ={ api }