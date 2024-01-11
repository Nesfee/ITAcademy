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

  get titleOfEmptyShoppingCart() {
    return $('//div[@class="i-textual__plain i-textual__plain_arrow i-textual__plain_limited"]')
  }

  get infoAboutStore() {
    return $('//div[@class="place-info__description content"]')
  }

  async chooseItemByNumber(number) {
      await this.click(await this.searchItems[number - 1])
  }
  
}

export default new SearchResultPage();