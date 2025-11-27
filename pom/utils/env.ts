/**
 * Environment configuration
 * Centralizes test data and URLs for easy maintenance
 * Follows Open/Closed Principle: extensible for different environments
 */
export const ENV = {
  urls: {
    loginPage: 'https://the-internet.herokuapp.com/login',
  },
  credentials: {
    validUser: {
      username: 'tomsmith',
      password: 'SuperSecretPassword!',
    },
    invalidUser: {
      username: 'testuser',
      password: 'pasword',
    },
  },
} as const;
