# Build first, add tests as the puzzle takes shape

The site and test suites can stay in separate repositories. Keep a local checkout of each side by side. Start this site with `npm start` on port 4174, then run the relevant tests from the testing repository.

## Playwright: browser behavior

The existing framework tests Task Garden. Its page object and tests are specific to that app, so changing its base URL alone will not make them test this site.

When you're ready, add a separate `tests/useless-site/` folder and `pages/useless-site-page.js` in the Playwright repository. Scope a separate configuration to those new tests:

```js
// Example for a future playwright.useless-site.config.js in the Playwright repository.
// Start Useless Site separately with npm start before running this configuration.
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/useless-site',
  use: {
    baseURL: process.env.USELESS_SITE_URL || 'http://127.0.0.1:4174',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

Once those files exist, run `npx playwright test --config=playwright.useless-site.config.js` from the Playwright repository. This is a planning example; those tests/configuration have not been created yet. For CI later, check out both repositories and start the site through Playwright's `webServer` option.

Useful first scenarios: the page loads, Poke it changes the status, Reset restores the initial state, and both buttons work from the keyboard. As you add puzzles, cover correct/incorrect moves, reset/replay, boundaries, and the actual win condition. Use accessible roles and names; `data-testid="curious-dot"` gives the decorative dot a stable selector if its appearance needs a targeted assertion.

## API suite: when there is an API

The static site currently has only a development readiness endpoint, `GET /health`. It has no puzzle API. When you add endpoints for puzzle data or saved progress, add site-specific HTTP tests and contract documentation to the API repository. Keep its existing task API tests separate.

## QA strategy: a plan for your puzzles

Use the strategy notebook's approach for your own requirements, risk notes, test cases, and exploratory charters. The current CRM case study remains a fictional example; your site can have its own documented cases as it grows.

## Data checks: if you add saved state

The financial QA lab teaches transaction/reconciliation checks. If this site eventually stores scores or progress, borrow those consistency-testing patterns where relevant. There is no need to add money movement or a database just to use that repository.
