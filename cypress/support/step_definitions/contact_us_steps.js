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