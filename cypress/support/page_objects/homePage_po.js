import basePage_po from "./basePage_po";

class homePage_po extends basePage_po{
    navigateToHomePage() {
        super.navigate(" ");
    }

    clickOn_ContactUsButton() {
        cy.clickAndOpenTab("#contact-us");
    }

    clickOn_LoginPortalButton() {
        cy.clickAndOpenTab("#login-portal");
    }

}

export default homePage_po;