Feature: Ecommerce Validations
    @Validation
    Scenario Outline: Placing the Order
        Given a Login to Ecommerce2 Application with "<username>" and "<password>"
        Then Verify error message is displayed

        Examples:
            | username              | password          |
            | rahulshetty@yahoo.com | Learning@830$3mK2 |
            | ef@nlk.com            | S689jbjj98989jlkk |
            | sanketpc31@gmail.com  | S59664644fefe4444 |
            | eDdehtg547.com        | Sfsdfrdg6glkk     |