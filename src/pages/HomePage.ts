import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('a[href="/login"]');
  }

  async navigate() {
     await this.page.goto('/');
  }

  async clickSignupLogin() {
    await this.loginButton.click();
  }
}