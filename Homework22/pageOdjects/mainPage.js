import BasePage from './basePage';

class MainPage extends BasePage {
    get mainPageTitle() {
        return cy.xpath('//h1');
    }

    get installButton(){
        return cy.get('astro-island > .border');
    }

    get installButtonNpm() {
        return cy.get('[data-cy="modal-install-copy"]');
    }

    get installAfterMassage() {
        return cy.get('[data-cy="modal-install-copy"] > .flex');
    }

    get buttonCypressApp() {
        return cy.xpath('//a[contains(text(), "Cypress App")]')
    }

    get helpButton() {
        return cy.xpath('//button[@class="css-1jvtpvf-root-overlay-overlayShadow"]')
    }

    get helpButtonThree() {
        return cy.xpath('//button[@data-backend-test-id="picklist-option"][3]')
    }

    get helpButtonThreeResponse() {
        return cy.xpath('//p[contains(text(), "Great! Check out our ")]')
    }

    async installCypressCheck() {
        this.installButton.click();
        this.installButtonNpm.click();
    }

}

export default new MainPage();