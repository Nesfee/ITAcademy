import { Page } from "./page.js";

class CheckoutPage extends Page {
  constructor() {
    super()
  }

  get selectAllItemsCheckout() {
    return $('//tr[@class="goods-table__row goods-table__row_footer"]//span[@class="i-checkbox i-checkbox_large"]')
  }

  get selectItemsCheckouts() {
    return $$('//tr[@class="goods-table__row "]//span[@class="i-checkbox i-checkbox_large"]')
  }

  get addItemsToFavoriteButton() {
    return $('//button[@class="i-button i-button_small addto-favs"]')
  }

  get removeItemsFromShoppingCardButton() {
    return $('//button[@class="i-button i-button_danger i-button_small remove"]')
  }

  get removeItemsFromShoppingCardAgreeButton() {
    return $('//button[@class="i-button i-button_danger i-button_small remove-yes"]')
  }

  async removeItemFromShoppingCart(itemNumber) {
    await this.click(await this.selectItemsCheckouts[itemNumber - 1]);
    await this.click(await this.removeItemsFromShoppingCardButton);
    await this.click(await this.removeItemsFromShoppingCardAgreeButton)
  }

  async clearShoppingCart() {
    await this.click(await this.selectAllItemsCheckout);
    await this.click(await this.removeItemsFromShoppingCardButton);
    await this.click(await this.removeItemsFromShoppingCardAgreeButton)
  }

}

export default new CheckoutPage();