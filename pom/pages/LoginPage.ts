import { Page, Locator, expect } from '@playwright/test';

/**
 * LoginPage - Encapsulates all interactions with the login page
 * Follows Single Responsibility Principle: handles only login page operations
 */
export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly flashMessage: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: ' Login' });
    this.flashMessage = page.locator('#flash');
    this.errorMessage = page.getByText('Your username is invalid! ×');
  }

  async navigateToLoginPage(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  /**
   * High-level method that encapsulates the complete login flow
   * Follows Command pattern: performs action without returning value
   */
  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async verifyErrorMessageIsVisible(): Promise<void> {
      await expect(this.errorMessage).toBeVisible();
    }
  
    async verifyFlashMessageContainsError(expectedError: string): Promise<void> {
      await expect(this.flashMessage).toContainText(expectedError);
    }
  
    /**
     * High-level verification method that validates invalid username error
     * Encapsulates all assertions related to invalid login attempts
     */
    async verifyInvalidUsernameError(): Promise<void> {
      await this.verifyErrorMessageIsVisible();
      await this.verifyFlashMessageContainsError('Your username is invalid! ×');
    }
  
    /**
     * Generic method to verify any flash error message
     * Follows Open/Closed Principle: extensible for different error types
     */
    async verifyFlashError(errorText: string): Promise<void> {
      const genericError = this.page.getByText(errorText);
      await expect(genericError).toBeVisible();
      await expect(this.flashMessage).toContainText(errorText);
    }
}
