import basePage_po from './basePage_po.js';

class login_po extends basePage_po {

    navigateToLoginPage() {
        super.navigate("/Login-Portal/index.html");
    }

    typeUsername(username) {
        cy.get('#text').type(username);
    }

    typePassword(password) {
        cy.get('#password').type(password);
    }

    clickOnLoginButton() {
        cy.get('#login-button').click();
    }



}

export default login_po;