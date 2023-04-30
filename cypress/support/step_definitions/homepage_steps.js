import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import basePage_po from "../page_objects/basePage_po";
import homePage_po from "../page_objects/homePage_po";

//const url = "http://www.webdriveruniversity.com/";

const basePage = new basePage_po();
const homePage = new homePage_po();

Given("I access webdriveruniversity home page", () => {
     homePage.navigateToHomePage("");
});

When("I click on the contact us button", () => {
    homePage.clickOn_ContactUsButton();

});

When("I click on the login portal button", () => {
    homePage.clickOn_LoginPortalButton();
});