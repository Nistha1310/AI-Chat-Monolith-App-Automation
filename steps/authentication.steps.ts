import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../src/pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I navigate to the login page', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo(process.env.BASE_URL!);
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
  // Handled cleanly inside loginWithSSO
});

When('I enter my password and sign in', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.loginWithSSO(process.env.SSO_USERNAME!, process.env.SSO_PASSWORD!);
});

When('I handle the "Stay signed in" prompt if it appears', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.handleStaySignedIn();
});

Then('I should see the AI Assistant input field', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.verifyDashboard();
});