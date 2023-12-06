import mainPage from "../pageObjects/mainPage.js";
import searchComponent from "../pageObjects/pageComponents/searchComponent.js";
import searchResultPage from '../pageObjects/searchResultPage.js';
import navComponents from "../pageObjects/pageComponents/navComponents.js"
import { expect } from 'chai';

describe('Main page tests', () => {
  it('should load the main page with true title', async () => {
    await mainPage.navigate("https://webdriver.io/");
    const actualTitle = await mainPage.getText(mainPage.headerTitle);
    expect(actualTitle).to.equal("Next-gen browser and mobile automation test framework for Node.js");
  });

  it('should load the page, make search "Async", choose "From Sync to Async" and similar header result', async () => {
    await mainPage.navigate("https://webdriver.io/");
    await mainPage.click(searchComponent.searchButton);
    await searchComponent.searchByText("Async");
    const searchTopicText = await searchComponent.selectTopicByNumber(1);
    expect(await searchResultPage.getText(searchResultPage.topicTitle)).to.equal(searchTopicText);
  });

  it('should switch color of website', async () => {
    await mainPage.navigate("https://webdriver.io/");
    await mainPage.toggleLightButton.click();
    expect(await mainPage.getAttribute(mainPage.toggleLightButton, "title")).to.contains("(currently light mode)");
  });

  it('should navigate to the another page at nav menu', async () => {
    await mainPage.navigate("https://webdriver.io/");
    const navTitleText = await navComponents.selectNavTitles(3);
    expect(await navComponents.getText(navComponents.navActiveTitle)).to.equal(navTitleText);
  });

  it('should change language to another', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await navComponents.changeLanguageSector.moveTo();
    const languageTitleText = await navComponents.changeLanguage(2);
    await navComponents.changeLanguageSector.moveTo();
    expect(await navComponents.getText(navComponents.changeLanguageButtonActive)).to.equal(languageTitleText);
  });
});