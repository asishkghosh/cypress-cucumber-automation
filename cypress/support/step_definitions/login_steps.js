import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
let stub;

When("I enter a username {string} and password {string}", (userName, password) => {
        cy.get("#text").type(userName);
        cy.get("#password").type(password);
});

When("I click on the login button", () => {
        stub = cy.stub();
        cy.on('window:alert', stub); 
        cy.get("#login-button").click();
});

Then ("I should be presented with a successful validation {string}", (message) => {
        expect(stub).to.be.calledWith(message);
});

