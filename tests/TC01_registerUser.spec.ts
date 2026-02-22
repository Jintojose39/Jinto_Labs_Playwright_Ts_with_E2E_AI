import { test, expect } from '../src/fixtures/baseTest';

test('Test Case 1 - Register User', async ({ homePage }) => {

  await test.step('Navigate to homepage', async () => {
    await homePage.navigate(); // uses baseURL from config
  });
//   await test.step('Click Signup/Login', async () => {
//     await homePage.clickSignupLogin();
//   });

});