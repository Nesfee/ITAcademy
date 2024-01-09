import { defaultTimeout } from "./constants.js"


export function waitForElementClickable(element, timeout = defaultTimeout) {
    return browser.waitUntil( () => {
        return element.isClickable();
    },
    {
        timeout: timeout,
        timeoutMsg: `Element with ${element} selector is not clickable after ${timeout}`
    })
}

export function waitForElementDisplayed(element, timeout = defaultTimeout) {
    return browser.waitUntil( () => {
        return element.isDisplayed();
    },
    {
        timeout: timeout,
        timeoutMsg: `Element with ${element} selector is not clickable after ${timeout}`
    })
}




