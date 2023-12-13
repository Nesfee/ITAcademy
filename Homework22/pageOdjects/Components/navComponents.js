import BasePage from '../basePage';

class NavComponents extends BasePage {
    get pricingTitle() {
        return cy.get(':nth-child(5) > .nav-bar-link');
    }
 
    async PricingClick() {
        this.pricingTitle.click()
    }

}

export default new NavComponents();