import { BaseComponents } from "./baseComponents.js";

class navComponents extends BaseComponents {
  constructor() {
    super();
  }

  get leftNavCategories() {
    return $$('//ul[@class="main-nav__list"]/li')
  }

  async leftNavItems(itemName) {
    return $(`//a[contains(text(), "${itemName}")]`)
  }

  async selectNavItemByText(categoriesNumber, itemName) {
    await this.moveTo(await this.leftNavCategories[categoriesNumber - 1]);
    await this.click(await this.leftNavItems(itemName))
  }
}

export default new navComponents();