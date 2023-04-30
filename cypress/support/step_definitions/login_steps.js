import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login_po from "../page_objects/login_po";

let stub;
const loginPage = new login_po();

Given ("I go to login page", () => {
        loginPage.navigateToLoginPage("");
});


When("I enter a username {string} and password {string}", (userName, password) => {
        //cy.login("#text", "#password",userName, password);
        loginPage.typeUsername(userName);
        loginPage.typePassword(password);

});

When("I click on the login button", () => {
        stub = cy.stub();
        cy.on('window:alert', stub);
        loginPage.clickOnLoginButton();
});

Then("I should be presented with a successful validation {string}", (message) => {
        expect(stub).to.be.calledWith(message);
});

