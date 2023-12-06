import { BaseElements } from "../helpers/baseElements.js";

class BasePage extends BaseElements {
  async navigate(url) {
    await browser.url(url);
  }
}

export { BasePage };