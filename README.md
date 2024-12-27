# Playwright Testing Framework

## Design Pattern
Page Object Model
## Install dependencies:
```npm install```

## Install Playwright browsers:
```npx playwright install```
## Overview

This is an end-to-end testing framework built using [Playwright](https://playwright.dev). It is designed to provide robust and scalable automation for web applications.

---

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Supports headless and headed modes
- Screenshot and video recording for debugging
- Parallel test execution
- Custom helper utilities for common test actions

---
# Run test via command line

Run all test cases
```npx playwright test```

Run single test case
```npx playwright test --headed -g "<test-case-title>"```

Run test with allure-playwright report
```npx playwright test --reporter=line,allure-playwright```

To generate report
```npx allure generate ./allure-results --clean ```

To Open HTML report on a browser using the command
```npx allure open ./allure-report```

