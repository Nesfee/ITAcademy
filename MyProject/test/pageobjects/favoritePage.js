import { Page } from "./page.js";

class FavoritePage extends Page {
  constructor() {
    super()
  }

  get removeItemFromFavoriteButtons() {
    return $$('//button[@class="product-card__favorite like like_active"]')
  }

  get addItemToFavoriteButton() {
    return $$('//button[@class="product-card__favorite like"]')
  }

  async addItemToFavorite(itemNumber) {
    await this.click(await this.addItemToFavoriteButton[itemNumber - 1]) 
    await browser.pause(500) // Загрузка нового состояния элемента
    return this.removeItemFromFavoriteButtons[itemNumber - 1].getAttribute("class");
  }

  async removeItemFromFavorite(itemNumber) {
    await this.click(await this.removeItemFromFavoriteButtons[itemNumber - 1]);
    await browser.pause(500) // Загрузка нового состояния элемента
    return this.addItemToFavoriteButton[itemNumber - 1].getAttribute("class");
  }

}

export default new FavoritePage();