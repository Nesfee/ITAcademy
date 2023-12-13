import BasePage from './basePage';

class AppPage extends BasePage {
    get appTitle() {
        return cy.xpath("//h1")
    }
}

export default new AppPage();