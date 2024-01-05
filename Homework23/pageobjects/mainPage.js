const { $ } = require('@wdio/globals')
const Page = require('./page');

class MainPage extends Page {
    constructor() {
        super();
    }

    get "Search Result Header"() {
        return '//h1'
    }

    get "Search Button"() {
        return 'button.DocSearch'
    }

    get "Search Field"() {
        return "input.DocSearch-Input"
    }

    async searchSectionListNumber(sectionNumber, listNumber) {
        return $(`//section[@class='DocSearch-Hits'][${sectionNumber}]//li[${listNumber}]`)
    }

    async searchCheckResult() {
        (await this.searchSectionListNumber()).click()
    }


}

module.exports = new MainPage();
