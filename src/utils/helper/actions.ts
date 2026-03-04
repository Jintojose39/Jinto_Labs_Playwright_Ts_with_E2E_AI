import { Locator ,expect } from '@playwright/test';


/**
 * // Clicks on a locator after ensuring it is visible and scrolled into view.
 * // This function is useful for handling cases where elements may be hidden or not immediately interactable
 * //use case :await safeClick(this.deleteAccountButton);
 * @param locator - The Playwright Locator to be clicked
 */
export async function safeClick(locator: Locator) {
  await expect(locator).toBeVisible();
  await locator.scrollIntoViewIfNeeded();
  await locator.click();
}