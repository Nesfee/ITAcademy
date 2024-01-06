import { Page } from "./page.js";

class ItemPage extends Page {
  constructor() {
    super()
  }

  get itemTitle() {
    return $("//h1")
  }

}

export default new ItemPage();