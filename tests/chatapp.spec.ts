import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

test('Verify the login page', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/vite-app/);
  // Verify the login page image is visible
  await expect(page.getByRole('img', { name: 'company logo' })).toBeVisible();
  //wait for 5 seconds
  //await page.waitForTimeout(5000);
  // click the login button
  await page.getByRole('button', { name: 'Continue with SSO' }).press('Enter');
  //wait for 5 seconds
  await page.waitForTimeout(5000);
  // Verify the Signin page is visible
  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  // Enter the email address
  await page.getByPlaceholder('Email, phone, or Skype').fill(process.env.SSO_USERNAME!);
    // Click the Next button
    await page.getByRole('button', { name: 'Next' }).press('Enter');
    // Verify the password field is visible
    await expect(page.getByPlaceholder('Password')).toBeVisible();  
    // Enter the password
    await page.getByPlaceholder('Password').fill(process.env.SSO_PASSWORD!);
    // Click the Sign in button
    await page.getByRole('button', { name: 'Sign in' }).press('Enter');
    // If the "Stay signed in?" dialog appears, click "No"
    try {
        await page.getByRole('button', { name: 'No' }).click({ timeout: 5000 });
    } catch (error: unknown) {
        // Ignored silently if the prompt does not appear
    }
    // Wait for 5 seconds to ensure the login process completes
    //await page.waitForTimeout(5000);
    // Verify the AI Assistant page is visible
    //await expect(page.getByRole('heading', { name: 'AI Assistant' })).toBeVisible();
    // Verify the "Ask a question, upload a document, or choose a template..." input field is visible
    await expect(page.getByPlaceholder('Ask a question, upload a document, or choose a template...')).toBeVisible();
});

