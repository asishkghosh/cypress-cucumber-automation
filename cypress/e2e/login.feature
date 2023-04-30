@login @regression
Feature: Login page test case


    Background: Pre conditions
        Given I go to login page

    Scenario Outline: validate login page with valid credentials and invalid credentials
        And I enter a username "<username>" and password "<password>"
        And I click on the login button
        Then I should be presented with a successful validation "<message>"

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | Peter     | 1234         | validation failed    |
            | Tom       | 123456       | validation failed    |