import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import contactUs_po from "../page_objects/contactUs_po";

const contactUs = new contactUs_po();

Given ("I access webdriveruniversity contactUs page", () => {
        contactUs.navigateToContactUsPage();
});

When("I enter a valid first name", () => {
        contactUs.enterFirstName("Joe");
});

When("I enter a valid last name", () => {
        contactUs.enterLastName("Blogs");
});

When("I enter a valid email address", () => {
        contactUs.enterEmailAddress("nothing@gmail.com");
});

When("I enter comments", () => {
        contactUs.enterComments("How can I learn Cypress?");
});

When("I click on the submit button", () => {
        contactUs.clickOnSubmitButton();

});

Then("I should be presented with a successful contact us submission message", () => {
        cy.get("body").should("have.text", "Thank You for your Message!");
});

Then("I should be presented with an unsuccessful contact us submission message", () => {
        cy.get("body").contains("Error: Invalid email address");
});

When("I enter a custom first name {string}", (firstName) => {
        contactUs.enterFirstName(firstName);
});

When("I enter a custom last name {string}", (lastName) => {
        contactUs.enterLastName(lastName);
});

When("I enter a custom email address {string}", (email) => {
        contactUs.enterEmailAddress(email);
});

When("I enter custom comments {string}", (comment) => {
        contactUs.enterComments(comment);
});

When("I enter a first name {word} and last name {string}", (firstName, lastName) => {
        contactUs.enterFirstName(firstName);
        contactUs.enterLastName(lastName);
});

When("I enter an email address {string} and comments {string}", (emailAddress, comments) => {
        contactUs.enterEmailAddress(emailAddress);
        contactUs.enterComments(comments);
});

Then("I should be presented with a {string}", (message) => {
        contactUs.validateSuccessfulSubmissionHeader();
});