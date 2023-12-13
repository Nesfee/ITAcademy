class BasePage {
    navigate(url) {
        cy.visit(url);
    }
}

export default BasePage;