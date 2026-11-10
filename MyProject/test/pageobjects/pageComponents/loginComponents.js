import { BaseComponents } from "./baseComponents.js";

class SearchComponents extends BaseComponents {
  constructor() {
    super();
  }

  get loginWithEmailButton() {
    return $("#loginFormLoginEmailLink")
  }

  get loginWithPhoneButton() {
    return $("#loginFormLoginPhoneLink")
  }

  get loginMobileNumberField() {
    return $("#formInputLoginPhone")
  }

  get loginEmailField() {
    return $("//input[@tabindex='1' and @type='email']")
  }

  get loginPasswordField() {
    return $("//input[@tabindex='2']")
  }

  get loginEmailButton() {
    return $("//button[@tabindex='4' and @form='loginForm']")
  }

  get loginMobileButton() {
    return $("#phoneForm button")
  }

  get passwordErrorMessage() {
    return $("div.i-input-group__popover_visible div.i-popover__line")
  }

  get mobileCodeField() {
    return $("#formInputLoginCode")
  }

  async loginWithEmail(login, password) {
    await this.click(await this.loginWithEmailButton);
    await this.setValue(await this.loginEmailField, login)
    await this.setValue(await this.loginPasswordField, password)
    await this.click(await this.loginEmailButton)
  }

  async loginWithMobileNumber(mobileNumber) {
    await this.addValue(await this.loginMobileNumberField, mobileNumber)
    await this.click(await this.loginMobileButton)
  }

}

export default new SearchComponents();