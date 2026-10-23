const base = require('@playwright/test');


exports.customtest = base.test.extend({
    testDataforOrder: {
        productName: "ZARA COAT 3",
        username: "ef@nlk.com",
        password: "GHBmwbMeL2XmhP#"
    }


})