import { Page, Locator,expect } from '@playwright/test';
import { randomPassword,generateRandomUserProfile,generateRandomName } from '../utils/dataGenerator/dataGenerator';
import { safeClick } from '../utils/helper/actions';
import { retryAction } from '../utils/helper/retryHelper';
import {  User } from '../utils/models/Users';
const userProfile = generateRandomUserProfile();
const randomName = generateRandomName();
const password = randomPassword(10);

export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly loginPageHeader:Locator;
  readonly emailAddress:Locator;
  readonly signUpName:Locator;
  readonly signUpButton:Locator;
  readonly accountHeader:Locator;
  readonly titleField:Locator;  
  readonly passwordField:Locator;
  readonly dayOfBirth:Locator;
  readonly monthOfBirth:Locator;
  readonly yearOfBirth:Locator;
  readonly newsLetter:Locator
  readonly offers:Locator
  readonly firstName:Locator
  readonly lastName:Locator;
  readonly company:Locator;
  readonly address1:Locator;
  readonly address2:Locator;
  readonly country:Locator;
  readonly state:Locator;
  readonly city:Locator;
  readonly zipCode:Locator;
  readonly mobileNumber:Locator;
  readonly creatAccountButton:Locator;
  readonly accountCreatedHeader:Locator;
  //Congratulations! Your new account has been successfully created!
  readonly continueButton:Locator;
  readonly loggedInUser:Locator;
  readonly deleteAccountButton:Locator;
  readonly deleteAccountHeader:Locator;
    constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('link', { name: 'Login' });
    this.loginPageHeader = page.getByText('New User Signup!');
    this.emailAddress = page.locator('[data-qa="signup-email"]');
    this.signUpName = page.locator('[data-qa="signup-name"]');
    this.signUpButton =page.locator('[data-qa="signup-button"]');
    this.accountHeader =page.getByText('Enter Account Information');
    this.titleField = page.locator('#id_gender1');
    this.passwordField = page.locator('#password');
    this.dayOfBirth = page.locator('#days');
    this.monthOfBirth = page.locator('#months');
    this.yearOfBirth = page.locator('#years');
    this.newsLetter = page.locator('#newsletter');
    this.offers = page.getByLabel('Receive special offers from our partners!');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address1 = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipCode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.creatAccountButton = page.getByText('Create Account');
    this.accountCreatedHeader = page.getByText('Account Created!');
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.loggedInUser = page.getByText('Logged in as');
    this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' });
    this.deleteAccountHeader = page.getByText('Account Deleted!');

  }


  /**
   * Clicks the "Signup / Login" button to navigate to the login/signup page.
   */
  async clickSignupLogin() {
    await this.loginButton.click();
  }

  /**
   * Fills in the sign-up form with a name and email, then clicks the "Sign Up" button.
   */
  async enterSignUpDetails(user: User) {
    await this.signUpName.fill(user.firstName);
    await this.emailAddress.fill(`${user.firstName}@gmail.com`);
    await this.signUpButton.click();
  }

  async fillTheLoginForm(user: User) {
    await this.titleField.click();
    await this.passwordField.fill(password);
    await this.dayOfBirth.selectOption('15');
    await this.monthOfBirth.selectOption('5');
    await this.yearOfBirth.selectOption('1990');  
    await this.newsLetter.check();
    await this.offers.check();
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.company.fill(user.company);
    await this.address1.fill(user.address);
    await this.address2.fill('Apartment 101');
    await this.country.selectOption('India');
    await this.state.fill(user.state);
    await this.city.fill(user.city);
    await this.zipCode.fill(user.zipcode);
    await this.mobileNumber.fill(user.mobileNumber);
    await this.creatAccountButton.click();
    await this.accountCreatedHeader.waitFor({ state: 'visible' });
}

/**
* Verifies that the account creation was successful by checking for the presence of the "Continue" button
 */
async verifyAccountCreated() {
  await this.continueButton.waitFor({ state: 'visible' });
  await this.continueButton.click();
  await this.continueButton.click();
  await this.loggedInUser.waitFor({ state: 'visible' });
  await this.deleteAccountButton.waitFor({ state: 'visible' });
}


  async clickContinue(): Promise<void> {
    await Promise.all([
      this.page.waitForURL('**/account_created'),
      this.continueButton.click(),
    ]);
  }


  /**
   * Deletes the user account by clicking the "Delete Account" button and waits for the URL to change to the account deletion 
   */
  async deleteAccount(): Promise<void> {
    await expect(this.deleteAccountButton).toBeVisible();
    await this.deleteAccountButton.scrollIntoViewIfNeeded();
    await retryAction(async () => {
      await this.deleteAccountButton.click();
    });
  
  }

}