@contact-us @regression

Feature: WebDriverUniversity - Contact Us Page

    Background: Pre Conditional steps
        Given I access webdriveruniversity home page
        When I click on the contact us button

    Scenario: Validate Contact Us Page form submission
        And I enter a valid first name
        And I enter a valid last name
        And I enter a valid email address
        And I enter comments
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Invalid Contact Us Page form submission
        And I enter a valid first name
        And I enter a valid last name
        And I enter comments
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Validate Contact Us Page form submission using custom Data
        And I enter a custom first name "Tom"
        And I enter a custom last name "Smith"
        And I enter a custom email address "email@example.com"
        And I enter custom comments "How are you?"
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @somke
    Scenario Outline: Validate Contact Us Page form submission using example Data
        And I enter a first name <firstName> and last name "<lastName>"
        And I enter an email address "<emailAddress>" and comments "<comments>"
        And I click on the submit button
        Then I should be presented with a "<message>"

        Examples:
            | firstName | lastName | emailAddress        | comments       | message                      |
            | Tom       | Smith    | email@example.com   | How are you?   | Thank You for your Message!  |
            | Mary      | Jane     | something@gmail.com | what are you?  | Thank You for your Message!  |
            | Albert    | Einstein | nothing             | where are you? | Error: Invalid email address |