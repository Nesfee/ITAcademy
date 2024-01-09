import { expect } from "chai";
import mainPage from "../pageobjects/mainPage.js"
import searchResultPage from "../pageobjects/searchResultPage.js";
import searchComponents from "../pageobjects/pageComponents/searchComponents.js";
import filterComponents from "../pageobjects/pageComponents/filterComponents.js";
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

    it('should search item by filter and check true title of item', async () => {
        await searchComponents.searchByTextWithButton(SEARCH_TEXT.TEXT_1);
        await filterComponents.selectGroupOfItemByNumber(1);
        await filterComponents.selectCategoriesOfItemByName("Книги");
        await filterComponents.selectPriceOfItem("37", "200");
        await filterComponents.filterAgreeButton.click();
        await searchResultPage.chooseItemByNumber(1);
        expect(await (await searchResultPage.itemTitle.getText()).toLowerCase()).to.contain((SEARCH_TEXT.TEXT_1).toLowerCase())
     })
})