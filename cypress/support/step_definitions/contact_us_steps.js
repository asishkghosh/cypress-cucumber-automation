import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I enter a valid first name", () => {
        cy.get("[name='first_name']").type("Joe");
});

When("I enter a valid last name", () => {
        cy.get("[name='last_name']").type("Blogs");
});

When("I enter a valid email address", () => {
        cy.get("[name='email']").type("something@gmail.com");
});

When("I enter comments", () => {
        cy.get("textarea.feedback-input").type("How can I learn Cypress?");
});

When("I click on the submit button", () => {
        cy.get("[type='submit']").click();
});

Then("I should be presented with a successful contact us submission message", () => {
        cy.get("h1").should("have.text", "Thank You for your Message!");
});

Then("I should be presented with an unsuccessful contact us submission message", () => {
        cy.get("body").contains("Error: Invalid email address");
});

When("I enter a custom first name {string}", (firstName) => {
        cy.get("[name='first_name']").type(firstName);
});

When("I enter a custom last name {string}", (lastName) => {
        cy.get("[name='last_name']").type(lastName);
});

When("I enter a custom email address {string}", (email) => {
        cy.get("[name='email']").type(email);
});

When("I enter custom comments {string}", (comment) => {
        cy.get("textarea.feedback-input").type(comment);
});

When("I enter a first name {word} and last name {string}", (firstName, lastName) => {
        cy.get("[name='first_name']").type(firstName);
        cy.get("[name='last_name']").type(lastName);
});

When("I enter an email address {string} and comments {string}", (emailAddress, comments) => {
        cy.get("[name='email']").type(emailAddress);
        cy.get("textarea.feedback-input").type(comments);
});

Then("I should be presented with a {string}", (message) => {
        cy.get("body").contains(message);
});