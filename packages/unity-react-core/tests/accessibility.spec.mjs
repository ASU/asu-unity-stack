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

  test.beforeAll(async () => {
    try {
      const response = await fetch(`${STORYBOOK_URL}/index.json`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch storybook index: ${response.statusText}`
        );
      }
      storyIndex = await response.json();
    } catch (error) {
      console.error("Error fetching storybook index:", error);
    }
  });

  test(
    "Components should pass Siteimprove accessibility tests",
    async ({ browser, page }) => {
      if (!storyIndex) {
        console.error(
          "Skipping test because storybook index could not be fetched"
        );
        return;
      }

      const accessibilityViolations = [];
      const reportFilePath = path.join(
        reportDir,
        `siteimprove-report-${timestamp}.json`
      );

      const allResults = [];

      let count = 0;
      const stories = Object.entries(storyIndex.entries).filter(([key]) =>
        storiesToTest.some(story => key.includes(story))
      );
      const totalStories = stories.length;

      for (const [storyId, story] of stories) {
        const encodedStoryId = encodeURIComponent(story.id);
        const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story`;

        count++;
        console.log(`Testing (${count}/${totalStories}): ${story.title}`);

        const context = await browser.newContext();
        const page = await context.newPage();

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

          const violations =
            Logging.fromAudit(alfaResult).toJSON().logs[1].logs;

          if (failingRules.size > 0) {
            console.log(
              `Found ${violations.length} violations in ${story.title}`
            );

            const result = {
              component: story.title,
              storyId: storyId,
              url: storyUrl,
              violations: violations,
            };

            accessibilityViolations.push(result);
            allResults.push(result);
          } else {
            allResults.push({
              component: story.title,
              storyId: storyId,
              url: storyUrl,
              violations: [],
            });
          }
        } catch (error) {
          console.error(`Error testing ${story.title}:`, error);
          accessibilityViolations.push({
            component: story.title,
            storyId: storyId,
            error: error.message,
          });

          allResults.push({
            component: story.title,
            storyId: storyId,
            url: storyUrl,
            error: error.message,
          });
        } finally {
          await context.close();
        }
      }

      // Save the full report as JSON only in local development
      if (!process.env.CI) {
        fs.writeFileSync(reportFilePath, JSON.stringify(allResults, null, 2));
        console.log(`Saved detailed JSON report to: ${reportFilePath}`);
      }

      if (accessibilityViolations.length > 0) {
        console.error("Accessibility violations found:");

        const totalViolations = accessibilityViolations.reduce(
          (acc, result) =>
            acc + (result.violations ? result.violations.length : 0),
          0
        );

        console.error(
          `\nTotal components with issues: ${accessibilityViolations.length}`
        );
        console.error(`Total violations: ${totalViolations}`);

        expect(
          accessibilityViolations.length,
          `The test found ${accessibilityViolations.length} components with accessibility issues`
        ).toBe(0);
      } else {
        console.log("No accessibility violations found! 🎉");
      }
    }
  );
});
