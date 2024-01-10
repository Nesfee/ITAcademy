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

  get stocksAndSalesButton() {
    return $('//a[contains(text(), "Акции и скидки")]')
  }

  get bigSalesButton() {
    return $('//a[contains(text(), "Большие скидки %")]')
  }

  async cityByName(cityName) {
    return $(`//div[@class="city-nav__body scrollbar city-nav__body_wide"]//a[@data-city="${cityName}"]`)
  }

  async storeInCityByAddressName(cityName, addressName) {
    return $(`//div[@data-id="${cityName}"]/div[@class="city-nav__body scrollbar"]//div[@data-menu-store="${addressName}"]//a`)
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

  async selectCityAndAddressOfStoreByName(cityName, addressName) {
    await this.moveTo(await this.leftNavCategories[11]);
    await this.click(await this.cityByName(cityName))
    await this.click(await this.storeInCityByAddressName(cityName, addressName))
  }
  
}

export default new navComponents();