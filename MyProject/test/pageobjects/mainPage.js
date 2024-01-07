import { Page } from "./page.js";

class MainPage extends Page {
  constructor() {
    super()
  }

  get loginButton() {
    return $("//a[@class='link user-bar__item']")
  }

  get userName() {
    return $("//span[@class='user__name']")
  }

  
}

export default new MainPage();