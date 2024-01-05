const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const mainPage = require('../pageobjects/mainPage');


Given("User navigate on the '(.*)' page", async (url) => {
    await browser.url(url);
});

When("User click on {locator} button", async (selector) => {
    await $(selector).waitForDisplayed({timeout: 25000});
    await $(selector).click();
});

When("User input field {locator} with text {string}", async (selector, text) => {
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
});

When("User choose section number {number} and list number {number} and make click", async (sectionNumber, listNumber) => {
    await mainPage.searchSectionListNumber(sectionNumber, listNumber);
    await mainPage.searchCheckResult();
});

Then("User see text {string} in element {locator}", async (text, selector) => {
    await $(selector).waitForDisplayed();
    await expect(await $(selector)).toHaveText(text);
});

