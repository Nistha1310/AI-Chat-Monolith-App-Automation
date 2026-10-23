import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, BrowserContext } from '@playwright/test';

export interface CustomWorld extends World {
  page?: Page;
  context?: BrowserContext;
}