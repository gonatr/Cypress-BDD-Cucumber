Feature: Chart Testing

    Background: Home Page
        Given User on Home Page Luna
        When I click sign in page
        When I input email "zeenin@mailnesia.com", the password "Te$la1234" and clicks on the login button

    @AddChart1 @Positive
    Scenario: Successfully Add Items on Woman with type 1
        When User click Woman
        When User click Top and choose Jacket
        When User click Olivia Zip Light Jacket
        When User Choose size, colour, QTY and clicks on the Add Chart button
        Then User get The result


    @AddChart2 @Positive
    Scenario: Successfully Add Items on Woman with type 2
        When User click Woman Pages
        When User click shope by Top
        When User set items Breathe-Easy tank, size, colour, and clicks on the Add Chart button
        Then User get The result ver



