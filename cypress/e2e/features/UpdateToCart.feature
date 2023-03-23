Feature: Chart Testing

    Background: Home Page
        Given User on Home Page Luna

    @UpdateChart @Positive
    Scenario: Successfully Update Jacket on Woman
        When User click Shoping Chart
        When User click View and Edit Chart
        When User click Edit Item
        When User Update Choose size, colour, QTY and clicks on the Add Chart button
        Then User get The result update


#         "cypress-cucumber-preprocessor": {
#     "nonGlobalStepDefinitions": false,
#     "stepDefinitons": "cypress/support/step_definitions"
#   }
# on('file:preprocessor', cucumber())