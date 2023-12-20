import BasePage from "./basePage";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async visit(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.textContent('h1');
  }

  async makeSearch() {
    await this.page.locator("button.DocSearch.DocSearch-Button").click();
    await this.page.locator("input.DocSearch-Input").fill('Locators');
    return this.page.textContent('xpath=//a[@href="/docs/locators"]//span[@class="DocSearch-Hit-title"]');
  }

  async changePageColor() {
    await this.page.locator("button.clean-btn.toggleButton_gllP").click();
    return this.page.locator("button.clean-btn.toggleButton_gllP").getAttribute("title");
  }

  async changeEnv() {
    await this.page.locator("div.navbar__item.dropdown.dropdown--hoverable").hover();
    await this.page.locator("//div[@class='navbar__item dropdown dropdown--hoverable']//li[2]").click();
    return this.page.textContent("//div[@class='navbar__item dropdown dropdown--hoverable']//li[1]")
  }

}
export default HomePage;
