import { expect } from "chai";
import mainPage from "../pageobjects/mainPage.js"
import navComponents from "../pageobjects/pageComponents/navComponents.js";
import searchResultPage from "../pageobjects/searchResultPage.js";
import { NAV_TESTING_DATA } from "../helpers/constants.js";


describe('Nav components tests', () => {
    beforeEach(async () => {
        await mainPage.navigate("https://oz.by/")
    });

    it('should choose item in nav menu and make click', async () => {
        for (let key in NAV_TESTING_DATA) {
            await navComponents.selectNavItemByText(NAV_TESTING_DATA[key].categoriesNumber, NAV_TESTING_DATA[key].itemName)
            expect(await (await (searchResultPage.categoriesTitle).getText()).toLowerCase()).to.contain(await (NAV_TESTING_DATA[key].itemName).toLowerCase())
            await mainPage.navigate("https://oz.by/")
        }
    })

    
})