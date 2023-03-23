Feature: Testing Login Luma page

    Background: Background name
        Given I on Luma home page
        When I click sign in page

    @LoginTest @Positive
    Scenario: visiting luma the frontpage and successfully login
        When I input email "zeenin@mailnesia.com", the password "Te$la1234" and clicks on the login button
        Then I should see a welcome msg

    @LoginTest1 @Negative
    Scenario: visiting luma the frontpage and unsuccessfully login
        When I input wrong email, the password and clicks on the login button
        Then I should see a welcome msg