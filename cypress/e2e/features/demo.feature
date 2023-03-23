# cypress/e2e/duckduckgo.feature
Feature: duckduckgo.com
    Scenario: visiting the frontpage
        Given I On Google Page
        When I visit duckduckgo.com
        Then I should see a search bar