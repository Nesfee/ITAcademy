import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv;

const browserName = process.env.BROWSER_NAME || argv.BROWSER_NAME || 'chrome'

const capabilities  = []

switch (browserName) {
    case 'chrome':
        capabilities.push({
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    // '--headless',
                    '--disable-gpu',
                    '--incognito',
                    'window-size=1920,1080',
                    '--no-sandbox',
                    'enable-automation',
                    'disable-notifications',
                ],
            }
        })
    break;
    case 'firefox':
        capabilities.push({
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '--disable-gpu',
                    '--incognito',
                    'window-size=1920,1080',
                    '--no-sandbox',
                    'enable-automation',
                    'disable-notifications',
                ],
            }
        })
    break;
}

export { capabilities }