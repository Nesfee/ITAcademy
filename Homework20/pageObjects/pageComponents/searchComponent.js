import { BaseComponents } from "./baseComponents.js";

class SearchComponent extends BaseComponents {
  constructor() {
    super();
    this.searchField = () => $("#docsearch-input");
  }

  get searchButton() {
    return $("//button[@class='DocSearch DocSearch-Button']")
  }

  get topicItems() {
    return $$(`//section[@class='DocSearch-Hits'][1]//ul//li`);
  }

  get topicItem() {
    return $("//section[@class='DocSearch-Hits'][1]//ul//li[1]")
  }

  async searchByText(searchText) {
    await this.searchField().waitForDisplayed();
    await this.searchField().click();
    await this.searchField().setValue(searchText);
  }

  async selectTopicByNumber(topicNumber) {
    await this.topicItem.waitForDisplayed();
    await this.topicItems[topicNumber - 1].waitForClickable();
    const searchTopicText = await this.topicItems[topicNumber - 1].getText();
    await this.topicItems[topicNumber - 1].click();
    return searchTopicText;
  }
}

export default new SearchComponent();