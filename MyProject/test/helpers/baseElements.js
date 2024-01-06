import { waitForElementClickable, waitForElementDisplayed } from './waiters.js'
import { defaultTimeout } from "./constants.js"


class BaseElements {
    async click(element, timeout = defaultTimeout) {
      await waitForElementClickable(element, timeout);
      return element.click();
    }
  
    async setValue(element, text, timeout = defaultTimeout, clearValue = true) {
      await waitForElementDisplayed(element, timeout);
      if(clearValue) {
        return element.setValue(text);
      }
      return element.addValue(text);
    }

    async addValue(element, text, timeout = defaultTimeout) {
      await waitForElementDisplayed(element, timeout);
      return element.addValue(text);
    }

    async getText(element, timeout = defaultTimeout) {
      await waitForElementDisplayed(element, timeout);
      return element.getText();
    }

    async getTitle(element, timeout = defaultTimeout) {
      await waitForElementDisplayed(element, timeout);
      return element.getTitle();
    }

    async getAttribute(element, attribute, timeout = defaultTimeout) {
      await waitForElementDisplayed(element, timeout);
      return element.getAttribute(attribute);
    }

    async moveTo(element, timeout = defaultTimeout) {
      await waitForElementDisplayed(element, timeout);
      return element.moveTo();
    }

}
  
export { BaseElements };