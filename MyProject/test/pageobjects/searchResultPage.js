import { Page } from "./page.js";

class SearchResultPage extends Page {
  constructor() {
    super()
  }

  get itemTitle(){
    return $('//h1')
  }

  get categoriesTitle() {
    return $('//li[@itemprop="itemListElement"][last()]')
  }
  
  get invalidSearchText() {
    return $('//h2')
  }

  get searchItems() {
    return $$("//div[@class='products__grid viewer-type-card--js-active']//div[@class='products__item item product-card ']")
  }

  get titleOfEmptyShoppingCard() {
    return $('//div[@class="i-textual__plain i-textual__plain_arrow i-textual__plain_limited"]')
  }

  async chooseItemByNumber(number) {
    this.click(await this.searchItems[number - 1])
  }
  
}

export default new SearchResultPage();