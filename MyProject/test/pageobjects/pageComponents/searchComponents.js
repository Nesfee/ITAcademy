import { BaseComponents } from "./baseComponents.js";

class LoginComponents extends BaseComponents {
  constructor() {
    super();
  }

  get searchInput() {
    return $('//input[@id="top-s"]')
  }

  get searchItemLinks() {
    return $$('.ui-menu-item')
  }

  get searchButton() {
    return $('.search-form__submit')
  }

  async searchByText(text) {
    await this.click(await this.searchInput);
    await this.setValue(await this.searchInput, text);
    await browser.pause(200);
    await this.click(await this.searchItemLinks[0]);
  }

  async searchByTextWithButton(text) {
    await this.click(await this.searchInput);
    await this.setValue(await this.searchInput, text);
    await this.click(await this.searchButton);
  }


}

export default new LoginComponents();