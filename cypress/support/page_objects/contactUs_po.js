import { extend } from 'cypress/types/lodash';
import basePage_po from '../basePage_po';

class contactUs_po extends basePage_po{
navigateToContactUsPage() {
    super.navigate("/Contact-Us/contactus.html");
}

enterFirstName(firstName) {
    cy.get("[name='first_name']").type(firstName);
}

enterLastName(lastName) {
    cy.get("[name='last_name']").type(lastName);
}

enterEmailAddress(emailAddress) {
    cy.get("[name='email']").type(emailAddress);
}

enterComments(comments) {
    cy.get("textarea.feedback-input").type(comments);
}

clickOnSubmitButton() {
    cy.get("[type='submit']").click();
}

validateSuccessfulSubmissionHeader(expectedText) {
    cy.get("body").contains(expectedText);
}

}
export default contactUs_po;