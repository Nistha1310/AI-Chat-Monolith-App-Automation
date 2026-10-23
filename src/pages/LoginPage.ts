import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async verifyTitleAndLogo() {
    await expect(this.page).toHaveTitle(/vite-app/);
    await expect(this.page.getByRole('img', { name: 'company logo' })).toBeVisible();
  }

  async clickSSOButton() {
    await this.page.getByRole('button', { name: 'Continue with SSO' }).press('Enter');
  }

  async enterEmail(username: string) {
    await expect(this.page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
    await this.page.getByPlaceholder('Email, phone, or Skype').fill(username);
    await this.page.getByRole('button', { name: 'Next' }).press('Enter');
  }

  async enterPassword(pass: string) {
    await expect(this.page.getByPlaceholder('Password')).toBeVisible();
    await this.page.getByPlaceholder('Password').fill(pass);
    await this.page.getByRole('button', { name: 'Sign in' }).press('Enter');
  }

  async handleStaySignedIn() {
    try {
      await this.page.getByRole('button', { name: 'No' }).click({ timeout: 5000 });
    } catch {
      // Ignored if prompt doesn't appear
    }
  }

  async verifyDashboard() {
    await expect(this.page.getByPlaceholder('Ask a question, upload a document, or choose a template...')).toBeVisible();
  }
}