Feature: Verify login screen

Scenario: Login to application
    Given user in login screen
    When user enter the email and password
    Then Verify popup "Successfully logged in."
 