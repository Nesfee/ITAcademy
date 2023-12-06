class BaseElements {
    async click(element) {
      await element.waitForClickable();
      await element.click()
    }
  
    async setValue(element, text) {
      await element.waitForDisplayed();
      await element.setValue(text);
    }
  
    async getText(element) {
      await element.waitForDisplayed();
      return element.getText();
    }

    async getTitle(element) {
      await element.waitForDisplayed();
      return element.getTitle();
    }

    async getAttribute(element, attribute) {
      await element.waitForDisplayed();
      return element.getAttribute(attribute);
    }

    async moveTo(element) {
      await element.waitForDisplayed();
      return element.moveTo();
    }
}
  
export { BaseElements };