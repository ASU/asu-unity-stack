/**
 * ACCESSIBILITY TESTING TODO LIST FOR SearchPage COMPONENT
 *
 * This file is for writing automated accessibility tests for the SearchPage component.
 * Below are detailed step-by-step instructions for implementing these tests.
 *
 * WHAT IS THIS FILE FOR?
 * This file tests the SearchPage component to make sure it meets accessibility standards
 * (like WCAG 2.1 AA) so that people with disabilities can use it properly.
 *
 * PREREQUISITES TO UNDERSTAND:
 * 1. The SearchPage component is in: /packages/app-webdir-ui/src/SearchPage/index.js
 * 2. The story (Storybook demo) is in: /packages/app-webdir-ui/src/SearchPage/index.stories.js
 * 3. We use Playwright for browser automation (controlling the browser in tests)
 * 4. We use Siteimprove Alfa for checking accessibility rules
 * 5. Storybook runs on http://localhost:9010 when testing
 *
 * BEFORE YOU START:
 * - Look at the example file: packages/app-degree-pages/tests/accessibility.spec.mjs
 * - That file shows the pattern we're following
 * - Read through ALL these TODOs before writing any code
 */

// TODO #1: Import the necessary testing libraries
// INSTRUCTIONS:
// - Import `test` and `expect` from "@playwright/test"
//   - `test` is used to define a test case
//   - `expect` is used to make assertions (checking if things are correct)
// - Import `Audit`, `Logging`, and `Rules` from "@siteimprove/alfa-test-utils"
//   - `Audit` runs the accessibility checks
//   - `Logging` helps us create reports
//   - `Rules` defines which accessibility rules to check
// - Import `Playwright` from "@siteimprove/alfa-playwright"
//   - This connects Siteimprove to Playwright
// - Import `path` and `fs` from Node.js (these are built-in, no package needed)
//   - `path` helps with file paths
//   - `fs` helps with reading/writing files
//
// EXAMPLE:
// import { test, expect } from "@playwright/test";


// TODO #2: Define the Storybook URL constant
// INSTRUCTIONS:
// - Create a constant called `STORYBOOK_URL`
// - Set it to the proper localhost URL where Storybook runs during tests


// TODO #3: Create the reports directory
// INSTRUCTIONS:
// - Create a constant called `reportDir` using `path.join()`
// - It should point to: process.cwd() + "accessibility-reports"
// - `process.cwd()` means "current working directory"
// -  check if the directory exists using the node packagee fs
// - If it doesn't exist, create it using the correct fs method
//


// TODO #4: Create a timestamp for unique report filenames
// INSTRUCTIONS:
// - Create a constant called `timestamp`
// - Use `.replace(/:/g, "-")` to replace colons with dashes
//   - We do this because colons aren't allowed in filenames on some systems
//


// TODO #5: Create the test suite (test.describe block)
// INSTRUCTIONS:
// - Use `test.describe()` to group your tests together
// - Give it a descriptive name like "SearchPage Accessibility Tests with Siteimprove"
// - This creates a "test suite" - a collection of related tests


// TODO #6: Write the first test - for the default SearchPage story
// INSTRUCTIONS:
// - Inside the test.describe block, create a test using `test()`
// - Name it something like: "SearchPage default view should pass accessibility tests"
// - The test function should be `async` and take `{ page }` as a parameter
//   - `page` is the Playwright browser page object
//   - `async` means this function uses asynchronous operations (with `await`)
//
// STEPS INSIDE THE TEST:
//
// a) Build the story URL:
//    - The story ID for SearchPage is "organisms-search-page-templates--search-page-example"
//      (you can find this in the Storybook UI or the stories file)
//    - Encode it using `encodeURIComponent()`
//    - Create the full URL: `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story`
//
// b) Navigate to the story:
//    - Use `await page.goto(storyUrl)` to load the page
//    - Use `await page.waitForTimeout(2000)` to wait 2 seconds
//      (This gives the page time to fully render)
//
// c) Get the document for Alfa testing:
//    - Use `await page.evaluateHandle(() => window.document)` to get the document
//
// d) Run the accessibility audit:
//    - Use `await Audit.run(alfaPage, { rules: { include: Rules.wcag21aaFilter } })`
//    - This checks the page against WCAG 2.1 AA standards
//
//
// f) Log the results:
//    - Use `Logging.fromAudit(alfaResult).print()` to print results to console
//
// g) Find failing rules:
//    - Filter results: `alfaResult.resultAggregates.filter(aggregate => aggregate.failed > 0)`
//
// h) Save JSON report (only if not in CI):
//    - Check `if (!process.env.CI)`
//    - Write file
//    - Log message with `console.log()`
//
// i) Assert no failures:
//    - Use `expect(failingRules.size).toBe(0)` with a descriptive error message
//
// EXAMPLE STRUCTURE:
// test("SearchPage default view should pass accessibility tests", async ({ page }) => {
//   // Add the rest of the steps here...
// });


// TODO #7: Consider what API mocking might be needed
// INSTRUCTIONS:
// - The SearchPage component makes API calls to search for users
// - In the test, you might need to mock these API responses
// - Look at the example test file - it uses `page.route()` to intercept API calls
// - The SearchPage uses the API_URL prop (see the stories file)
// - The API endpoint is something like: "**/api/**" or "**/api/v1/**"
//
// QUESTIONS TO ANSWER:
// - Does the SearchPage make API calls that need to be mocked?
// - What data should the mock return? (Look at the mock data in __mocks__/api/)
// - When should the route be set up? (Before or after page.goto?)
//
// look at the netowrk tab in browser dev tools when loading the story to see what api calls are made for the search page. These calls will need to be mocked in the test.
// Docks on mocking api calls: https://playwright.dev/docs/network#modify-responses
// EXAMPLE PATTERN:
// await page.route("**/api/**", route => {
//   route.fulfill({
//     status: 200,
//     contentType: "application/json",
//     body: JSON.stringify(mockData),
//   });
// });


// TODO #8: Test different states of the SearchPage (OPTIONAL. Maybe we can add this after we get everything else working)
// INSTRUCTIONS:
// - The SearchPage has different tabs: "All ASU Search", "Faculty and Staff", "Students"
// - Consider writing additional tests for these states
// - You might need to interact with the page to get to these states
// - Use `await page.click()` or `await page.fill()` to interact with elements
// - Use `await page.waitForSelector()` to wait for elements to appear
//
// EXAMPLES OF ADDITIONAL TESTS:
// - Test with search results populated (after a search)
// - Test the Faculty and Staff tab
// - Test the Students tab (requires login)
// - Test with filters applied
//
// NOTE: Each test should follow the same pattern as TODO #6


// TODO #9: Review the playwright.config.js file
// INSTRUCTIONS:
// - Look at: packages/app-degree-pages/playwright.config.js
// - You might need to create a similar config for app-webdir-ui
// - The config should:
//   - Point to the tests directory
//   - Start Storybook before running tests
//   - Use the correct port
//   - Set appropriate timeouts
//
// KEY SETTINGS:
// - testDir: should point to './tests'
// - webServer.command: should be 'yarn storybook' or similar
// - webServer.port: should be 9010
// - use.baseURL: should be 'http://localhost:9010'


// TODO #10: Understand common accessibility issues to look for
// INSTRUCTIONS:
// Research these common accessibility problems:
// - Missing alt text on images
// - Poor color contrast
// - Missing form labels
// - Improper heading hierarchy (h1, h2, h3, etc.)
// - Missing ARIA labels on interactive elements
// - Keyboard navigation issues
// - Focus indicators not visible
//
// The Siteimprove Alfa tool will automatically check for many of these!
// When tests fail, the console output will tell you what's wrong.
//
// HELPFUL RESOURCES:
// - WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
// - WebAIM: https://webaim.org/
// - Siteimprove Alfa docs: https://github.com/Siteimprove/alfa


// TODO #11: Run the tests
// INSTRUCTIONS:
// After writing your tests:
//
// 1. Make sure Storybook is running:
//    - Run `yarn storybook` in the app-webdir-ui package directory
//    - Wait for it to start on http://localhost:9010
//
// 2. Run the accessibility tests:
//    - Run `yarn playwright test` or `npx playwright test`
//    - Watch the console output for results
//
// 3. If tests fail:
//    - Check the console output for specific accessibility violations
//    - Look at the screenshot in the accessibility-reports folder
//    - Look at the JSON report for detailed information
//    - Create tickets for these issues in Jira


// TODO #12: Add comments and documentation
// INSTRUCTIONS:
// Once your tests are working:
// - Add comments explaining what each section does
// - Document any tricky parts
// - Explain why certain waits or delays are needed
// - Document what accessibility rules are being checked
// - Add JSDoc comments for any helper functions you create


/**
 * HELPFUL DEBUGGING TIPS:
 *
 * 1. If Storybook isn't starting:
 *    - Check that you're in the correct package directory
 *    - Try `yarn install` to make sure dependencies are installed
 *    - Check if port 9010 is already in use
 *
 * 2. If the page isn't loading:
 *    - Check the storyId is correct (look in Storybook UI)
 *    - Try increasing the waitForTimeout value
 *    - Use `await page.waitForLoadState('networkidle')` instead of waitForTimeout
 *
 * 3. If accessibility tests are failing:
 *    - Look at the screenshot to see what the page looks like
 *    - Check the JSON report for detailed rule violations
 *    - Read the console output carefully
 *    - Search for the specific WCAG rule that's failing
 *
 * 4. If you get TypeScript or import errors:
 *    - Make sure all packages are installed
 *    - Check that your import paths are correct
 *    - Try restarting your IDE/editor
 *
 * 5. If tests time out:
 *    - Increase the timeout in playwright.config.js
 *    - Check that Storybook is actually running
 *    - Make sure no other process is using port 9010
 */


/**
 * ADDITIONAL NOTES:
 *
 * - Tests should be independent (each test should work on its own)
 * - Tests should be repeatable (running the same test twice should give the same result)
 * - Tests should clean up after themselves
 * - Don't commit test reports to git
 *
 * RESOURCES:
 * - Example test file: packages/app-degree-pages/tests/accessibility.spec.mjs
 * - Playwright docs: https://playwright.dev/
 * - Siteimprove Alfa: https://github.com/Siteimprove/alfa
 * - Component under test: src/SearchPage/index.js
 * - Component story: src/SearchPage/index.stories.js
 */
