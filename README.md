# demo-dariel

Test automation project with Playwright using the Page Object Model (POM) pattern.

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/michaelpena2404/demo-dariel.git
cd demo-dariel
```

2. Install project dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📁 Project Structure

```
demo-dariel/
├── pom/
│   ├── pages/           # Page Object classes
│   │   ├── LoginPage.ts
│   │   └── SecureAreaPage.ts
│   └── utils/           # Utilities
│       └── env.ts
├── tests/               # Test cases
│   └── login.spec.ts
├── playwright.config.ts # Playwright configuration
└── package.json
```

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in UI mode (interactive interface)
```bash
npx playwright test --ui
```

### Run tests with HTML report
```bash
npx playwright test --reporter=html
```

### Run a specific test
```bash
npx playwright test tests/login.spec.ts
```

### Run tests in headed mode (see the browser)
```bash
npx playwright test --headed
```

### Run tests on a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📊 View Reports

After running the tests, you can view the HTML report:
```bash
npx playwright show-report
```

## 🐛 Debug Mode

To debug tests step by step:
```bash
npx playwright test --debug
```

## 📝 Notes

- Test execution reports are saved in the `playwright-report/` folder
- Test results are stored in `test-results/`
- The POM pattern helps keep the code organized and reusable