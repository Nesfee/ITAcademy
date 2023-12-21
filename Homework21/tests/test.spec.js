import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/homePage';
import BasePage from '../pageObjects/basePage';
import SearchResultPage from '../pageObjects/searchResultPage';

test.describe('Main page', () => {
  let homePage;
  let basePage
  let searchResultPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    basePage = new BasePage(page);
    searchResultPage = new SearchResultPage(page);
    await basePage.visit("https://playwright.dev/");
  });

  test('should display true title on the main page', async () => {
    const pageTitle = await homePage.getTitle();
    await expect(pageTitle).toContain('Playwright enables reliable end-to-end testing for modern web apps.');
  });

  test('should make search "Locators" and check result', async () => {
    const searchTitle = await homePage.makeSearch();
    await expect(searchTitle).toContain('Locators');
  });

  test('should click on switch color page button and check result of it', async () => {
    const lightModeTitle = await homePage.changePageColor();
    await expect(lightModeTitle).toContain('Switch between dark and light mode (currently dark mode)');
  });

  test('should click on change environment button, choose "Python" and check of changes', async () => {
    const envTitle = await homePage.changeEnv();
    await expect(envTitle).toContain('Python');
  });

  test('should click on the get started button and check title of result page', async () => {
    await homePage.startButton.click();
    const navTitle = await searchResultPage.writingTestsSelect();
    await expect(navTitle).toContain("Writing tests")
  });
});
