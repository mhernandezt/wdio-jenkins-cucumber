Feature: Open the TAU home page

Scenario: Verify title
    Given the user open TAU home page
    When the user review the page
    Then the title should be "Test Automation University | Applitools"