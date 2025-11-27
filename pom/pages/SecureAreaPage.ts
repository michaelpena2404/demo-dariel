import { Page, Locator, expect } from '@playwright/test';

/**
 * SecureAreaPage - Encapsulates interactions and validations for the secure area
 * Follows Single Responsibility Principle: handles only secure area operations
 */
export class SecureAreaPage {
  private readonly page: Page;
  private readonly successMessage: Locator;
  private readonly flashMessage: Locator;
  private readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.getByText('You logged into a secure area');
    this.flashMessage = page.locator('#flash');
    this.pageTitle = page.locator('h2');
  }

  async verifySuccessMessageIsVisible(): Promise<void> {
    await expect(this.successMessage).toBeVisible();
  }

  async verifyFlashMessageContainsText(expectedText: string): Promise<void> {
    await expect(this.flashMessage).toContainText(expectedText);
  }

  async verifyPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.pageTitle).toContainText(expectedTitle);
  }

  /**
   * High-level verification method that validates successful login
   * Encapsulates all assertions related to secure area access
   */
  async verifySuccessfulLogin(): Promise<void> {
    await this.verifySuccessMessageIsVisible();
    await this.verifyFlashMessageContainsText('You logged into a secure area! ×');
    await this.verifyPageTitle('Secure Area');
  }
}
