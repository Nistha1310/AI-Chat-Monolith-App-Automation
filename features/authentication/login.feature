Feature: AI Chat Authentication and Login

  Scenario: Verify the login page and successful SSO authentication
    Given I navigate to the login page
    Then I should see the company logo and correct page title
    When I click on "Continue with SSO"
    And I enter my SSO email and proceed
    And I enter my password and sign in
    And I handle the "Stay signed in" prompt if it appears
    Then I should see the AI Assistant input field