import { Page } from "./page.js";

class ItemPage extends Page {
  constructor() {
    super()
  }

  get itemTitle() {
    return $("//div[@class='b-product-title__heading']//h1")
  }

  get putItemInShoppingCartButton() {
    return $('.first-button')
  }

  get putItemInFavorite() {
    return $('//div[@class="b-product__media"]//label')
  }

}

export default new ItemPage();