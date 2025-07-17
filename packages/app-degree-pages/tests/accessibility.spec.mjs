import { test, expect } from "@playwright/test";
import { Audit, Logging, Rules } from "@siteimprove/alfa-test-utils";
import { Playwright } from "@siteimprove/alfa-playwright";
import path from "path";
import fs from "fs";
import { storiesToTest } from "./stories-to-test.mjs";
import detailPageJsonData from "../__mocks__/data/degree-search-detail.json" assert { type: "json" };

const STORYBOOK_URL = "http://localhost:9010";

const reportDir = path.join(process.cwd(), "accessibility-reports");
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/:/g, "-");

test.describe("Storybook Accessibility Tests with Siteimprove", () => {

  test(`Component ${storiesToTest[0]} should pass accessibility tests`, async ({ page }) => {
    await page.route("**/api/**", route => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(detailPageJsonData),
      });
    });
    const storyId = storiesToTest[0];
    const encodedStoryId = encodeURIComponent(storyId);
    const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story`;

    await page.goto(storyUrl);
    await page.waitForTimeout(2000);

    const document = await page.evaluateHandle(() => window.document);
    const alfaPage = await Playwright.toPage(document);

    const alfaResult = await Audit.run(alfaPage, {
      rules: { include: Rules.wcag21aaFilter },
    });

    await page.screenshot({
      fullPage: true,
      path: path.join(reportDir, `screenshot-${storyId}-${timestamp}.png`),
    });

    Logging.fromAudit(alfaResult).print();

    const failingRules = alfaResult.resultAggregates.filter(
      aggregate => aggregate.failed > 0
    );

    if (!process.env.CI) {
      const reportFilePath = path.join(reportDir, `siteimprove-report-${storyId}-${timestamp}.json`);
      fs.writeFileSync(
        reportFilePath,
        JSON.stringify(Logging.fromAudit(alfaResult).toJSON(), null, 2)
      );
      console.log(`Saved detailed JSON report to: ${reportFilePath}`);
    }

    expect(failingRules.size,
      `Found ${failingRules.size} accessibility rule violations in ${storyId}`
    ).toBe(0);
  });

  test(`Component ${storiesToTest[1]} should pass accessibility tests`, async ({ page }) => {
    // await page.route("**/api/**", route => {
    //   route.fulfill({
    //     status: 200,
    //     contentType: "application/json",
    //     body: JSON.stringify(searchPageJsonData),
    //   })
    // });
    const storyId = storiesToTest[1];
    const encodedStoryId = encodeURIComponent(storyId);
    const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story`;

    await page.goto(storyUrl);
    await page.waitForTimeout(2000);

    const document = await page.evaluateHandle(() => window.document);
    const alfaPage = await Playwright.toPage(document);

    const alfaResult = await Audit.run(alfaPage, {
      rules: { include: Rules.wcag21aaFilter },
    });

    await page.screenshot({
      fullPage: true,
      path: path.join(reportDir, `screenshot-${storyId}-${timestamp}.png`),
    });

    Logging.fromAudit(alfaResult).print();

    const failingRules = alfaResult.resultAggregates.filter(
      aggregate => aggregate.failed > 0
    );

    if (!process.env.CI) {
      const reportFilePath = path.join(reportDir, `siteimprove-report-${storyId}-${timestamp}.json`);
      fs.writeFileSync(
        reportFilePath,
        JSON.stringify(Logging.fromAudit(alfaResult).toJSON(), null, 2)
      );
      console.log(`Saved detailed JSON report to: ${reportFilePath}`);
    }

    expect(failingRules.size,
      `Found ${failingRules.size} accessibility rule violations in ${storyId}`
    ).toBe(0);
  });
});
