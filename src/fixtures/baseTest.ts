import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  homePage: HomePage;
  signupLoginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {

    // 🚫 Block ads globally
    /**
     * This route handler intercepts all network requests and checks if the URL contains common ad-related domains. If it does, the request is aborted, effectively blocking ads from loading on any page during the tests. 
     */
    await page.route('**/*', (route) => {
      const url = route.request().url();

      if (
        url.includes('doubleclick') ||
        url.includes('googlesyndication') ||
        url.includes('googleads') ||
        url.includes('google_vignette')
      ) {
        return route.abort();
      }

      route.continue();
    });

    await use(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signupLoginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';