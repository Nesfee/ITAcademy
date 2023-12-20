import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/homePage';

test.describe('Main page', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.visit("https://playwright.dev/");
  });

  test('should display true title on the main page', async ({ page }) => {
    const title = await homePage.getTitle();
    await expect(title).toContain('Playwright enables reliable end-to-end testing for modern web apps.');
  });

  test('should make search "Locators" and check result', async ({ page }) => {
    const title = await homePage.makeSearch();
    await expect(title).toContain('Locators');
  });

  test('should click on switch color page button and check result of it', async ({ page }) => {
    const title = await homePage.changePageColor();
    await expect(title).toContain('Switch between dark and light mode (currently dark mode)');
  });

  test('should click on change environment button and check of changes', async ({ page }) => {
    const title = await homePage.changeEnv();
    await expect(title).toContain('Python');
  });

  test('should click on the get started button and check title of result page', async ({ page }) => {
    const title = await homePage.getStartedButton();
    await expect(title).toContain('Installation');
  });
});
