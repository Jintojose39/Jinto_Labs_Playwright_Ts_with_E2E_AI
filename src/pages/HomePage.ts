import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly welcomeMessage:Locator;
  readonly dashBoardMessage:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('a[href="/login"]');
    this.welcomeMessage = page.locator('');
    this.dashBoardMessage = page.locator('.logo.pull-left');
  }

  async navigate() {
     await this.page.goto('/');
  }

  async clickSignupLogin() {
    await this.loginButton.click();
  }
}