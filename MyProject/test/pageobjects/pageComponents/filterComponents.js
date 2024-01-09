import { BaseComponents } from "./baseComponents.js";

class FilterComponents extends BaseComponents {
  constructor() {
    super();
  }

  get filterGroupOfItem() {
    return $$('//ul[@class="fm-block-universal-top filters__chkslist filters__chkslist--simple"]//li') //4
  }

  get filterInStockItems() {
    return $$('//ul[@id="ul_availability"]//li') //4
  }

  get filterMinPriceOfItem() {
    return $('#inp1_r_cost') // min 3.28
  }

  get filterMaxPriceOfItem() {
    return $('#inp2_r_cost')  //max 489.59
  }

  get filterAgreeButton() {
    return $('//button[@class="filters__searchbtn__btn"]')
  }

  get filterClearButton() {
    return $('//a[@class="clear-filter filters__searchbtn__reset"]')
  }

  async filterRatingOfItem(starsNumber) {
    return $(`//span[@data-value="${starsNumber}"]/parent::*`) // 1-5
  }

  async filterCategoriesByName(categoriesName) {
    return $(`//ul[@class="filters__simplist"]//span[contains(text(), "${categoriesName}")]`) 
  }

  async selectPriceOfItem(minPrice, maxPrice) {
    await this.setValue(await this.filterMinPriceOfItem, minPrice)
    await this.setValue(await this.filterMaxPriceOfItem, maxPrice)
  } 

}

export default new FilterComponents();