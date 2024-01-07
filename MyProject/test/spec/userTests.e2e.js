import { expect } from "chai";
import mainPage from "../pageobjects/mainPage.js"
import navComponents from "../pageobjects/pageComponents/navComponents.js";
import searchResultPage from "../pageobjects/searchResultPage.js";
import itemPage from "../pageobjects/itemPage.js";
import checkoutPage from "../pageobjects/checkoutPage.js";
import searchComponents from "../pageobjects/pageComponents/searchComponents.js"
import loginComponents from "../pageobjects/pageComponents/loginComponents.js";
import { SEARCH_TEXT, EMPTY_SHOPPING_CARD_NOTIFICATION } from "../helpers/constants.js";
import { credentials } from "../data/credentials.js"


describe('Critical path tests', () => {
    beforeEach(async () => {
        await mainPage.navigate("https://oz.by/")
        await mainPage.loginButton.click();
        await loginComponents.loginWithEmailButton.click();
        await loginComponents.loginWithEmail(credentials.validLoginData.login, credentials.validLoginData.password);
    });

    it('should find item, add item to shopping card and remove it', async () => {
        await searchComponents.searchByTextWithButton(SEARCH_TEXT.TEXT_1);
        await searchResultPage.chooseItemByNumber(1);
        await itemPage.putItemInShoppingCard();
        await navComponents.shoppingCardButton.click();
        await checkoutPage.removeItemFromShoppingCard(1)
        expect(await searchResultPage.titleOfEmptyShoppingCard.getText()).to.contain(EMPTY_SHOPPING_CARD_NOTIFICATION)
    })

    
})