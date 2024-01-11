import { expect } from "chai";
import mainPage from "../pageobjects/mainPage.js"
import navComponents from "../pageobjects/pageComponents/navComponents.js";
import searchResultPage from "../pageobjects/searchResultPage.js";
import { NAV_TESTING_DATA, ADDRESS_TEXT_INFO, STOCKS_AND_SALES_TITLE, BIG_SALES_TITLE, COUNTRY_NAME, ADDRESS_NAME } from "../helpers/constants.js";


describe('Nav components tests', () => {
    beforeEach(async () => {
        await mainPage.navigate("https://oz.by/")
    });

    it('should choose item in nav menu, make click and check title of categories', async () => {
        for (let key in NAV_TESTING_DATA) {
            await navComponents.selectNavItemByText(NAV_TESTING_DATA[key].categoriesNumber, NAV_TESTING_DATA[key].itemName)
            expect(await (await (searchResultPage.categoriesTitle).getText()).toLowerCase()).to.contain(await (NAV_TESTING_DATA[key].itemName).toLowerCase())
            await mainPage.navigate("https://oz.by/")
        }
    })

    it('should select store in city by name and get true title', async () => {
            await navComponents.selectCityAndAddressOfStoreByName(COUNTRY_NAME, ADDRESS_NAME)
            expect(await searchResultPage.infoAboutStore.getText()).to.contain(ADDRESS_TEXT_INFO)
    })

    it('should click on stocks and sales button and get true title', async () => {
        await navComponents.click(await navComponents.stocksAndSalesButton);
        expect(await searchResultPage.itemTitle.getText()).to.contain(STOCKS_AND_SALES_TITLE)
    })

    it('should click on big sales button and get true title', async () => {
         await navComponents.click(await navComponents.bigSalesButton);
        expect(await searchResultPage.categoriesTitle.getText()).to.contain(BIG_SALES_TITLE)
    })

})