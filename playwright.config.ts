import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

/**
 * Load environment variables
 */
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail build if test.only exists in CI */
  forbidOnly: !!process.env.CI,

  /* Retry strategy */
  retries: process.env.CI ? 2 : 0,

  /* Workers */
  workers: process.env.CI ? 1 : undefined,

  /* Global hooks (equivalent to WDIO onPrepare/onComplete) */
  globalSetup: require.resolve('./src/global-setup'),
  globalTeardown: require.resolve('./src/global-teardown'),

  /* Reporter configuration */
  reporter: [
    ['html'],
  ['allure-playwright']
  ],

  /* Shared settings */
  use: {
    baseURL: process.env.BASE_URL,

    /* Debug artifacts */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    /* Helpful timeout defaults */
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

});