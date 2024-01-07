import { Page } from "./page.js";

class ItemPage extends Page {
  constructor() {
    super()
  }

  get itemTitle() {
    return $("//h1")
  }

  get putItemInShoppingCardButton() {
    return $('.first-button')
  }

  async putItemInShoppingCard() {
    await this.click(await this.putItemInShoppingCardButton)
  }

}

export default new ItemPage();