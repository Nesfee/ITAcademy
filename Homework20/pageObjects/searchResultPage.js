import { BasePage } from "./basePage.js";

class SearchResultPage extends BasePage {
  constructor() {
    super()
  }

  get topicTitle() {
    return $("//h1");
  }
}

export default new SearchResultPage();