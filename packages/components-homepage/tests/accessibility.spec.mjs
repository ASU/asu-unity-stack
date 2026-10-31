import { test, expect } from "@playwright/test";
import { Playwright } from "@siteimprove/alfa-playwright";
import { Audit, Logging, Rules } from "@siteimprove/alfa-test-utils";

import { storiesToTest } from "./stories-to-test.mjs";

const STORYBOOK_URL = "http://localhost:9050";

test.describe("Storybook accessibility (Siteimprove Alfa, WCAG 2.1 AA)", () => {
  let storyIndex;

  test.beforeAll(async () => {
    const response = await fetch(`${STORYBOOK_URL}/index.json`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch the Storybook index: ${response.statusText}`
      );
    }
    storyIndex = await response.json();
  });

  for (const storyId of storiesToTest) {
    test(`${storyId} has no WCAG 2.1 AA violations`, async ({ page }) => {
      const story = storyIndex.entries[storyId];
      expect(
        story,
        `Story ${storyId} not found in the Storybook index`
      ).toBeDefined();

      await page.goto(
        `${STORYBOOK_URL}/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`
      );
      await page.waitForSelector("#storybook-root > *");

      const document = await page.evaluateHandle(() => window.document);
      const alfaPage = await Playwright.toPage(document);
      const alfaResult = await Audit.run(alfaPage, {
        rules: { include: Rules.wcag21aaFilter },
      });

      const failingRules = alfaResult.resultAggregates.filter(
        aggregate => aggregate.failed > 0
      );
      if (failingRules.size > 0) {
        Logging.fromAudit(alfaResult).print();
      }

      expect(
        failingRules.size,
        `Accessibility violations found in ${story.title}`
      ).toBe(0);
    });
  }
});
