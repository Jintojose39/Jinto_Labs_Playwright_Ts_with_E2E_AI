import { test, expect } from "../src/fixtures/baseTest";
import { generateUser } from '../src/utils/dataGenerator/userGenerator';
import { generateRandomUserProfile } from '../src/utils/dataGenerator/dataGenerator';


test.describe("TC01-Register the User|E2E - User Registration Flow", () => {
  const user = generateUser();
  test("User should register successfully and delete account", async ({ homePage, signupLoginPage }) => {
    await test.step("Enter name and email and click Sign Up", async () => {
      await homePage.navigate();
      await expect(
        homePage.dashBoardMessage,
        "Dashboard message should be visible after page load"
      ).toBeVisible();
      await signupLoginPage.clickSignupLogin();
      await expect(
        signupLoginPage.loginPageHeader,
        "Sign Up page did not load after clicking button"
      ).toBeVisible();
      await signupLoginPage.enterSignUpDetails(user);
      await expect(
        signupLoginPage.accountHeader,
        "Enter account information header should be displayed"
      ).toBeVisible();
      await signupLoginPage.fillTheLoginForm(user);
      // await expect(signupLoginPage.newsLetter, "Newsletter checkbox should be visible after filling the form").toBeChecked()
      //await expect(signupLoginPage.offers, "Offers checkbox should be visible after filling the form").toBeChecked()
    });
    await test.step("Verify 'Account Created!' is visible after registration", async () => {
      await expect(
        signupLoginPage.accountCreatedHeader,
        "Account Created! header should be visible after registration"
      ).toBeVisible();
    });
    await test.step("Verify 'Continue' button is visible after registration and validate logged User name", async () => {
      await signupLoginPage.clickContinue();
      await expect(signupLoginPage.loggedInUser, "Logged in user link should be visible after registration").toBeVisible();
    });

    const loggedText = await signupLoginPage.loggedInUser.textContent();
    console.log(loggedText);
    console.log(user.firstName);
    await expect(
      signupLoginPage.loggedInUser,
      "Logged in user link should contain the registered user's name"
    ).toContainText(user.firstName);

    await test.step("Verify that the user can delete their account", async () => {
      await signupLoginPage.deleteAccount();
      await expect(signupLoginPage.deleteAccountHeader, "Account Deleted! header should be visible after deleting account").toBeVisible();
    });

  });

});
