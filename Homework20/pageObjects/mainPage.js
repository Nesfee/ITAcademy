import { BasePage } from "./basePage.js";

class MainPage extends BasePage {
  constructor() {
    super()
  }

  get headerTitle() {
    return $("//p[@class='hero__subtitle']");
  }

  get docsTitle() {
    return $("//a[contains(text(), 'Docs')]");
  }

  get toggleLightButton() {
    return $("//button[@class='clean-btn toggleButton_gllP']")
  }


}

export default new MainPage();