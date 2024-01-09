const { Builder, By, Key, until } = require('selenium-webdriver');

describe('ChromeDriver Test', () => {
  let driver;

  beforeEach(async () => {
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize({width: 1960, height: 1280})
  });

  afterEach(async () => {
    await driver.quit();
  });

  test('should open the ChromeDriver website', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const pageTitle = await driver.getTitle();
    expect(pageTitle).toContain('ChromeDriver');
  });

  test('should click on Chrome Extensions in the header, check the new title and make highlight', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const chromeExtensionsLink = await driver.wait(until.elementLocated(By.linkText('Chrome Extensions')));
    await chromeExtensionsLink.click();
    const newPageTitleHighlight = await driver.wait(until.elementLocated(By.xpath("//div[@class='Pvc6xe']//nav[@class='plFg0c']//ul[@jsname='waIgnc']//li[@data-nav-level='1'][3]//div[@class='PsKE7e qV4dIc Qrrb5 YSH9J M9vuGd']")));
    await driver.executeScript('arguments[0].style.backgroundColor = "yellow";', newPageTitleHighlight);
    const newPageTitle = await driver.getTitle();
    expect(newPageTitle).toContain('Chrome Extensions');
  });
});

describe('Search Test', () => {
  let driver;

  beforeEach(async () => {
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setSize({width: 1960, height: 1280})
  });

  afterEach(async () => {
    await driver.quit();
  });

  test('should search for the word "driver"', async () => {
    await driver.get('https://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('driver', Key.RETURN);
    await driver.wait(until.titleContains('driver'));
  });
});