import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly userProfileButton: Locator;
  readonly logoutButton: Locator;
  readonly dashboardTitle: Locator;
  readonly userWelcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userProfileButton = page.locator('[data-testid="user-profile"]');
    this.logoutButton = page.locator('[data-testid="logout-button"]');
    this.dashboardTitle = page.locator('h1, [class*="dashboard-title"]');
    this.userWelcomeMessage = page.locator('[class*="welcome"]');
  }

  async navigate() {
    await this.page.goto('/dashboard');
  }

  async logout() {
    await this.logoutButton.click();
  }

  async clickUserProfile() {
    await this.userProfileButton.click();
  }

  async getDashboardTitle() {
    return await this.dashboardTitle.textContent();
  }
}
