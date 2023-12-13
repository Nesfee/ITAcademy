import mainPage from '../../pageOdjects/mainPage';
import navComponents from '../../pageOdjects/Components/navComponents';
import pricingPage from '../../pageOdjects/pricingPage';
import appPage from '../../pageOdjects/appPage';


describe('Cypress main page tests', () => {
  it('should check title to the valid text', async () => {
    await mainPage.navigate('https://www.cypress.io/');
    await cy.validateText(mainPage.mainPageTitle, "\nTest. Automate. Accelerate.");
  })

  it('should click on installButton and check result of copy', async () => {
    await mainPage.navigate('https://www.cypress.io/');
    await mainPage.installCypressCheck();
    await cy.validateText(mainPage.installAfterMassage, "copied");
  })

  it('should click on pricing title and check pricing', async () => {
    await mainPage.navigate('https://www.cypress.io/');
    await navComponents.PricingClick();
    await cy.validateText(pricingPage.pricingFree, "0 $");
    await cy.validateText(pricingPage.pricingTeam, "67 $");
    await cy.validateText(pricingPage.pricingBusiness, "267 $");
  })

  it('should click on cypress app button and check Title of page', async () => {
    await mainPage.navigate('https://www.cypress.io/');
    await mainPage.buttonCypressApp.click();
    await cy.validateText(appPage.appTitle, "Test modern apps directly in your browser");
  })

  it('should click on help button, choose "Learn more" and get response', async () => {
    await mainPage.navigate('https://www.cypress.io/');
    await mainPage.helpButton.click();
    await mainPage.helpButtonThree.click();
    await cy.validateText(mainPage.helpButtonThreeResponse, "Great! Check out our Why Cypress? Guide");
  })
})