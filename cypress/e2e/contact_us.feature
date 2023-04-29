Feature: WebDriverUniversity - Contact Us Page

    Scenario: Validate Contact Us Page form submission

        Given I access webdriveruniversity home page
        When I click on the contact us button
        And I enter a valid first name
        And I enter a valid last name
        And I enter a valid email address
        And I enter comments
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Invalid Contact Us Page form submission

        Given I access webdriveruniversity home page
        When I click on the contact us button
        And I enter a valid first name
        And I enter a valid last name
        And I enter comments
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message
        