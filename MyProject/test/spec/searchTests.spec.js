import { expect } from "chai";
import mainPage from "../pageobjects/mainPage.js"
import searchResultPage from "../pageobjects/searchResultPage.js";
import searchComponents from "../pageobjects/pageComponents/searchComponents.js";
import itemPage from "../pageobjects/itemPage.js";
import { SEARCH_TEXT, INVALID_TEXT, SEARCH_ERROR_MASSAGE } from "../helpers/constants.js";


describe.skip('Search tests', () => {
    beforeEach(async () => {
        await mainPage.navigate("https://oz.by/")
    });

    it('should search items by text and get true titles', async () => {
        for (let textKey in SEARCH_TEXT) {
            await searchComponents.searchByText(SEARCH_TEXT[textKey]);
            await searchResultPage.chooseItemByNumber(1);
            expect(await (await itemPage.itemTitle.getText()).toLowerCase()).to.contain(await (SEARCH_TEXT[textKey]).toLowerCase()) 
        }
    })

    it('should search incorrect items and get error massage', async () => {
       await searchComponents.searchByTextWithButton(INVALID_TEXT);
       expect(await (searchResultPage.invalidSearchText).getText()).to.equal(SEARCH_ERROR_MASSAGE)
    })
})