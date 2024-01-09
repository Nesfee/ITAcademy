import { BaseComponents } from "./baseComponents.js";

class navComponents extends BaseComponents {
  constructor() {
    super();
  }

  get shoppingCartButton() {
    return $('//a[@class="link user-bar__item user-bar__cart"]')
  }

  get myOzButton() {
    return $("//div[@class='user-bar__item']//a[@class='link user-bar__item']")
  }

  get muOzSecretButton() {
    return $('//div[@class="nav-menu__row pt-2"]//span[contains(text(), "Мой OZ")]')
  }

  get myFavoriteButton() {
    return $("//div[@class='header__user-bar user-bar']/a[@class='link user-bar__item']")
  }

  get quitButton() {
    return $('//a[contains(text(), "Выйти")]')
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

  async logoutFromAccount() {
    await this.moveTo(await this.myOzButton);
    await this.click(await this.muOzSecretButton);
    await this.click(await this.quitButton);
  }
  
}

export default new navComponents();