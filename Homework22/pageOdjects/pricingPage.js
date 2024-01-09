import BasePage from './basePage';

class PricingPage extends BasePage {
    get pricingPageTitle() {
        return cy.xpath('//h1');
    }

    get pricingFree() {
        return cy.get(':nth-child(1) > div.mb-6 > .flex > .font-secondary')
    }

    get pricingTeam() {
        return cy.get(':nth-child(2) > div.mb-6 > .flex > .font-secondary')
    }

    get pricingBusiness() {
        return cy.get(':nth-child(3) > div.mb-6 > .flex > .font-secondary')
    }

}


export default new PricingPage();