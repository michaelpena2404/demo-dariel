import { test } from '@playwright/test';
import { LoginPage } from '../pom/pages/LoginPage';
import { ENV } from '../pom/utils/env';
import { SecureAreaPage } from '../pom/pages/SecureAreaPage';

/**
 * Login Negative Test Suite
 * Tests error scenarios with invalid credentials
 * Clean test structure with all logic delegated to Page Objects
 */
test.describe('Login herokuapp test cases', () => {
  test('should display error message for invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage(ENV.urls.loginPage);
    await loginPage.performLogin(
      ENV.credentials.invalidUser.username,
      ENV.credentials.invalidUser.password
    );
    await loginPage.verifyInvalidUsernameError();
  });

  test('should validate login success with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const secureAreaPage = new SecureAreaPage(page);

    await loginPage.navigateToLoginPage(ENV.urls.loginPage);
    await loginPage.performLogin(
      ENV.credentials.validUser.username,
      ENV.credentials.validUser.password
    );
    await secureAreaPage.verifySuccessfulLogin();
  });
});
