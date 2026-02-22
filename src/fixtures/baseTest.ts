import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';

type MyFixtures = {
  homePage: HomePage;
  signupLoginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signupLoginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';