import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../src/pages/LoginPage';
import { ConfigManager } from '../config/ConfigManager';

const { Given, When, Then } = createBdd();

Given('I navigate to the login page', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo(ConfigManager.getBaseUrl());
});

Then('I should see the company logo and correct page title', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.verifyTitleAndLogo();
});

When('I click on {string}', async function ({ page }, _buttonName: string) {
  const loginPage = new LoginPage(page);
  await loginPage.clickSSOButton();
});

When('I enter my SSO email and proceed', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.enterEmail(ConfigManager.getSsoUsername());
});

When('I enter my password and sign in', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.enterPassword(ConfigManager.getSsoPassword());
});

When('I handle the "Stay signed in" prompt if it appears', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.handleStaySignedIn();
});

Then('I should see the AI Assistant input field', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.verifyDashboard();
});