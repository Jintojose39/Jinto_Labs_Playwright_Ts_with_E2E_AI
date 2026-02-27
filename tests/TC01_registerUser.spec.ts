import { test, expect } from "../src/fixtures/baseTest";

test.describe("TC01-Register the User", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test("Verify dashboard visible", async ({ homePage }) => {
    await expect(
      homePage.dashBoardMessage,
      "Dashboard message should be visible after page load"
    ).toBeVisible();
  });

  test("Enter name and email and click Sign Up", async ({ signupLoginPage }) => {
    await signupLoginPage.clickSignupLogin();
    await expect(
      signupLoginPage.loginPageHeader,
      "Sign Up page did not load after clicking button"
    ).toBeVisible();
    await signupLoginPage.enterSignUpDetails();
    await expect(
      signupLoginPage.accountHeader,
      "Enter account information header should be displayed"
    ).toBeVisible();
  });

  
});
