import BasePage from "./basePage";


class SearchResultPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get pageTitle() {
    return this.page.locator('//h1');
  }

  get writingTestsNavTitle() {
    return this.page.locator("//a[@class='menu__link' and text()='Writing tests']")
  }

  get currentNavTitle() {
    return this.page.locator("//a[@class='menu__link menu__link--active']")
  }

  async writingTestsSelect() {
    await this.writingTestsNavTitle.click();
    return this.currentNavTitle.textContent();
  }

}

export default SearchResultPage;