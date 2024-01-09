import { BaseElements } from "../helpers/baseElements.js";

class Page extends BaseElements {
  constructor() {
    super();
  }
    
  async navigate(url) {
    await browser.url(url);
  }
}

export { Page };