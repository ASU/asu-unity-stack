import { test, expect } from "@playwright/test";
import { Audit, Logging, Rules } from "@siteimprove/alfa-test-utils";
import { Playwright } from "@siteimprove/alfa-playwright";
import path from "path";
import fs from "fs";
import searchPageJsonData from "../__mocks__/api/feeds.json" assert { type: "json" };

const STORYBOOK_URL = "http://localhost:9030";

const reportDir = path.join(process.cwd(), "accessibility-reports");
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/:/g, "-");

const Search_Story_ID = ["organisms-search-page-templates--search-page-example" ,
  "organisms-search-page-templates--search-page-example&args=searchParams.search-tabs:web_dir_faculty_staff;searchParams.q:ia",
];

test.describe("SearchPage Accessibility Tests with Siteimprove", () => {
  let storyIndex;
  let storiesToTestArray = [];

  test.beforeAll(async () => {
    try {
      const response = await fetch(`${STORYBOOK_URL}/index.json`);
      if (!response.ok) throw new Error("Could not load Storybook index.json");

      storyIndex = await response.json();

      storiesToTestArray = Object.entries(storyIndex.entries).filter(([key]) =>
        Search_Story_ID.some(story => key.includes(story))
      );
    } catch (err) {
      console.error("Failed to fetch Storybook index:", err);
    }
  });

  for (const storyToTest of Search_Story_ID) {
    test(`${storyToTest} should pass accessibility tests`, async ({ page }) => {
      if (!storyIndex) {
        test.skip("Storybook index could not be fetched");
        return;
      }

      const [baseStoryId, argsString] = storyToTest.split('&args=');

      const storyEntry = storiesToTestArray.find(([key]) =>
        key.includes(baseStoryId)
      );

      if (!storyEntry) {
        test.skip(`Story ${storyToTest} not found in storybook index`);
        return;
      }

      const [storyKey, storyDef] = storyEntry;
      const encodedStoryId = encodeURIComponent(storyDef.id);
      const storyUrl = argsString
        ? `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story&args=${argsString}`
        : `${STORYBOOK_URL}/iframe.html?id=${encodedStoryId}&viewMode=story`;

      console.log(`Testing story: ${storyDef.title}`);

      try {
        // Mock API for SearchPage (adjust if needed)
        await page.route("**/api/**", route => {
          route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(searchPageJsonData),
          });
        });

        await page.goto(storyUrl);
        await page.locator('#storybook-root').waitFor({ state: 'visible' });

        const document = await page.evaluateHandle(() => window.document);
        const alfaPage = await Playwright.toPage(document);

        const alfaResult = await Audit.run(alfaPage, {
          rules: { include: Rules.wcag21aaFilter },
        });

        Logging.fromAudit(alfaResult).print();

        const failingRules = alfaResult.resultAggregates.filter(
          aggregate => aggregate.failed > 0
        );

        // Save individual report locally
        if (!process.env.CI && failingRules.length > 0) {
          const individualReportPath = path.join(
            reportDir,
            `${storyToTest}-${timestamp}.json`
          );

          fs.writeFileSync(
            individualReportPath,
            JSON.stringify(
              {
                component: storyDef.title,
                storyId: storyDef.id,
                url: storyUrl,
                failingRules: failingRules.map(rule => ({
                  ruleId: rule.rule.uri,
                  failed: rule.failed,
                  passed: rule.passed,
                  cantTell: rule.cantTell,
                })),
              },
              null,
              2
            )
          );

          console.log(`Saved report for ${storyDef.title} at: ${individualReportPath}`);
        }

        if (failingRules.length > 0) {
          console.error(`Found ${failingRules.length} failing rules in ${storyDef.title}`);

          const rulesSummary = failingRules
            .map(rule => `- ${rule.rule.uri}: ${rule.failed} failed`)
            .join("\n");

          expect(
            failingRules.length,
            `Accessibility violations found in ${storyDef.title}:\n${rulesSummary}`
          ).toBe(0);
        } else {
          console.log(`✅ No accessibility violations found in ${storyDef.title}`);
        }
      } catch (error) {
        console.error(`Error testing ${storyDef.title}:`, error);
        throw new Error(`Failed to test ${storyDef.title}: ${error.message}`);
      }
    });
  }
});

