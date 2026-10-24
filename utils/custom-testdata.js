const base = require('@playwright/test');


exports.customtest = base.test.extend({
    testDataforOrder: {
        productName: "ZARA COAT 3",
        username: "kevin.p@mail.com",
        password: "Kevin@12345"
    }


})