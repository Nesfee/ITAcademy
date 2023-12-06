import { BaseComponents } from "./baseComponents.js";

class NavComponents extends BaseComponents {
  constructor() {
    super();
  }

  get navTitles() {
    return $$("//div[@class='navbar__items']//a");
  }

  get navActiveTitle() {
    return $("//div[@class='navbar__items']//a[@aria-current='page']")
  }

  get changeLanguageSector() {
    return $("//div[@class='navbar__item dropdown dropdown--hoverable dropdown--right']//a[@role='button']");
  }

  get changeLanguageButtons() {
    return $$("//div[@class='navbar__item dropdown dropdown--hoverable dropdown--right']//li");
  }

  get changeLanguageButtonActive() {
    return $("//a[@class='dropdown__link dropdown__link--active']");
  }

  async selectNavTitles(navNumber) {
    await this.navTitles[navNumber - 1].waitForDisplayed();
    const navTitleText = await this.navTitles[navNumber - 1].getText();
    await this.navTitles[navNumber - 1].click()
    return navTitleText;
  }

  async changeLanguage(languageNumber) {
    await this.changeLanguageButtons[languageNumber - 1].waitForDisplayed();
    const languageTitleText = await this.changeLanguageButtons[languageNumber - 1].getText();
    await this.changeLanguageButtons[languageNumber - 1].click();
    return languageTitleText
  }
}

export default new NavComponents();