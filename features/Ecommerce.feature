Feature: Ecommerce Validations
    @ETE
    Scenario: Placing the Order
        Given a Login to Ecommerce Application with "ef@nlk.com" and "GHBmwbMeL2XmhP#"
        When Add "ZARA COAT 3" to cart
        Then Verify "ZARA COAT 3" is displayed in the cart
        When Enter Valid details and Place the Order
        Then Verify order is present in Order History Page


    @Validation1
    Scenario Outline: Placing the Order
        Given a Login to Ecommerce2 Application with "<username>" and "<password>"
        Then Verify error message is displayed

        Examples:
            | username    | password          |
            | rahulshetty | Learning@830$3mK2 |
            | ef@nlk.com  | S689jbjj98989jlkk |