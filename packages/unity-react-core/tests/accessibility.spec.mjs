import { test, expect } from "@playwright/test";
import { Audit, Logging, Rules } from "@siteimprove/alfa-test-utils";
import { Playwright } from "@siteimprove/alfa-playwright";
import fetch from "node-fetch";
import path from "path";
import fs from "fs";
import { storiesToTest } from "./stories-to-test.mjs";

const STORYBOOK_URL = "http://localhost:9200";

const reportDir = path.join(process.cwd(), "accessibility-reports");
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/:/g, "-");

test.describe("Storybook Accessibility Tests with Siteimprove", () => {
  let storyIndex;
  let storiesToTestArray = [];

  test.beforeAll(async () => {
    try {
      const response = await fetch(`${STORYBOOK_URL}/index.json`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch storybook index: ${response.statusText}`
        );
      }
      storyIndex = await response.json();

      // Filter stories to test and store them
      storiesToTestArray = Object.entries(storyIndex.entries).filter(([key]) =>
        storiesToTest.some(story => key.includes(story))
      );
    } catch (error) {
      console.error("Error fetching storybook index:", error);
    }
  });

  for (const storyToTest of storiesToTest) {
    test(`${storyToTest} should pass accessibility tests`, async ({ page }) => {
      if (!storyIndex) {
        test.skip("Storybook index could not be fetched");
        return;
      }

      const storyEntry = storiesToTestArray.find(([key]) =>
        key.includes(storyToTest)
      );

      if (!storyEntry) {
        test.skip(`Story ${storyToTest} not found in storybook index`);
        return;
      }

      const [storyId, story] = storyEntry;
      const encodedStoryId = encodeURIComponent(story.id);
      const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story`;

      console.log(`Testing: ${story.title}`);

      try {
        await page.goto(storyUrl);

        const document = await page.evaluateHandle(() => window.document);
        const alfaPage = await Playwright.toPage(document);

        const alfaResult = await Audit.run(alfaPage, {
          rules: { include: Rules.wcag21aaFilter },
        });

        Logging.fromAudit(alfaResult).print();

        const failingRules = alfaResult.resultAggregates.filter(
          aggregate => aggregate.failed > 0
        );

        const violations = Logging.fromAudit(alfaResult).toJSON().logs[1].logs;

        // Save individual report in local development
        if (!process.env.CI && violations.length > 0) {
          const individualReportPath = path.join(
            reportDir,
            `${storyToTest}-${timestamp}.json`
          );
          fs.writeFileSync(individualReportPath, JSON.stringify({
            component: story.title,
            storyId: storyId,
            url: storyUrl,
            violations: violations,
          }, null, 2));
          console.log(`Saved report for ${story.title} to: ${individualReportPath}`);
        }

        if (failingRules.size > 0) {
          console.error(`Found ${violations.length} violations in ${story.title}`);

          // Create a detailed error message
          const violationSummary = violations.map(v =>
            `- ${v.message || 'Accessibility violation'}`
          ).join('\n');

          expect(
            violations.length,
            `Accessibility violations found in ${story.title}:\n${violationSummary}`
          ).toBe(0);
        } else {
          console.log(`✅ No accessibility violations found in ${story.title}`);
        }

      } catch (error) {
        console.error(`Error testing ${story.title}:`, error);
        throw new Error(`Failed to test ${story.title}: ${error.message}`);
      }
    });
  }
});
