import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";

Given("I access webdriveruniversity home page", () => {

    cy.visit(url);

});

When("I click on the contact us button", () => {

    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

});
