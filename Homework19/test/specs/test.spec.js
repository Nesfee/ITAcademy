describe('WebdriverIO documentation page', () => {
  it('should navigate to a specific section', async () => {
    await browser.url('https://webdriver.io/docs/api/');
    const tabularListLink = $("//button[@aria-label=\"Expand sidebar category 'Protocols'\"]");
    await tabularListLink.waitForClickable();
    await tabularListLink.click();
    const compatibilitySection = await $('//ul[@class="menu__list"]');
    await expect(compatibilitySection).toBeDisplayed();
  });

  it('should verify the presence of a specific link in the footer', async () => {
    await browser.url('https://webdriver.io/docs/api/');
    const footerLink = $('//li//a[@href="/docs/gettingstarted"]');
    await footerLink.click();
    const gettingStartedLink = $("//li[@class='theme-doc-sidebar-item-category theme-doc-sidebar-item-category-level-1 menu__list-item']");
    expect(gettingStartedLink).toBeDisplayed();
  });

  it('should verify the search functionality', async () => {
    await browser.url('https://webdriver.io/docs/api/');
    const searchButton = $("//button[@class='DocSearch DocSearch-Button']");
    await searchButton.click();
    const searchInput = $("//input[@class='DocSearch-Input']");
    const yourTextValue = 'your search query';
    await searchInput.setValue(yourTextValue);
    const objectValue = await searchInput.getValue();
    expect(objectValue).toBe(yourTextValue);
  });

  it('should changed language to German', async () => {
    await browser.url('https://webdriver.io/docs/api/');
    const changeLanguageButton = $("//a[@aria-haspopup='true']");
    await changeLanguageButton.moveTo();
    const changeDeLanguageButton = $("//a[@lang='de']");
    await changeDeLanguageButton.click();
    await changeLanguageButton.moveTo();
    const changeDeLanguageButtonActive = $("//a[@class='dropdown__link dropdown__link--active']");
    expect(changeDeLanguageButtonActive).toBeDisplayed();
  });

  it('should click bot and ask question', async () => {
    await browser.url('https://webdriver.io/docs/api/');
    const robotLogoObject = $("//img[@alt='WebdriverIO AI Copilot']");
    await robotLogoObject.waitForClickable();
    await robotLogoObject.click();
    const textArea = $("//textarea[@placeholder='Why Webdriver.IO?']");
    await textArea.waitForClickable();
    const yourTextValue = "your search query";
    await textArea.setValue(yourTextValue);
    const askButton = $("//div[@class='ms-whitespace-nowrap ']");
    await askButton.click();
    const yesButton = $("//span[@id='yes-button']");
    expect(yesButton).toBeDisplayed();
  });
});