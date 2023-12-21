import BasePage from "./basePage";

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  get searchButton() {
    return this.page.locator('button.DocSearch.DocSearch-Button');
  }

  get searchField() {
    return this.page.locator('input.DocSearch-Input');
  }

  get searchResult() {
    return this.page.locator('xpath=//a[@href="/docs/locators"]//span[@class="DocSearch-Hit-title"]');
  }

  get lightModeButton() {
    return this.page.locator('button.clean-btn.toggleButton_gllP');
  }

  get envListField() {
    return this.page.locator('div.navbar__item.dropdown.dropdown--hoverable');
  }

  get envCurrentField() {
    return this.page.locator("//div[@class='navbar__item dropdown dropdown--hoverable']//li[1]");
  }

  get envPythonField() {
    return this.page.locator("//div[@class='navbar__item dropdown dropdown--hoverable']//li[2]");
  }

  get startButton() {
    return this.page.locator("//a[@class='getStarted_Sjon']");
  }

  async getTitle() {
    return this.page.textContent('h1');
  }

  async makeSearch() {
    await this.searchButton.click();
    await this.searchField.fill('Locators');
    return this.searchResult.textContent();
  }

  async changePageColor() {
    await this.lightModeButton.click();
    return this.lightModeButton.getAttribute("title");
  }

  async changeEnv() {
    await this.envListField.hover();
    await this.envPythonField.click();
    return this.envCurrentField.textContent();
  }

}
export default HomePage;
