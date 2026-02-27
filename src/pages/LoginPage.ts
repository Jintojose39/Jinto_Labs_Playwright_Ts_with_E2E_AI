import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly loginPageHeader:Locator;
  readonly emailAddress:Locator;
  readonly signUpName:Locator;
  readonly signUpButton:Locator;
  readonly accountHeader:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('link', { name: 'Login' });
    this.loginPageHeader = page.getByText('New User Signup!');
    this.emailAddress = page.locator('[data-qa="signup-email"]');
    this.signUpName = page.locator('[data-qa="signup-name"]');
    this.signUpButton =page.locator('[data-qa="signup-button"]');
    this.accountHeader =page.getByText('Enter Account Information');
    
  }


  async clickSignupLogin() {
    await this.loginButton.click();
  }

  async enterSignUpDetails() {
    await this.signUpName.fill('jinto');
    await this.emailAddress.fill('jinto123@gmail.com');
    await this.signUpButton.click();
  }
}