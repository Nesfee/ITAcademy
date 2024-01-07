import { BaseComponents } from "./baseComponents.js";

class navComponents extends BaseComponents {
  constructor() {
    super();
  }

  get shoppingCardButton() {
    return $('//a[@class="link user-bar__item user-bar__cart"]')
  }

  get myOzButton() {
    return $("//div[@class='user-bar__item']//a[@class='link user-bar__item']")
  }

  get myFavoriteButton() {
    return $("//div[@class='header__user-bar user-bar']/a[@class='link user-bar__item']")
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