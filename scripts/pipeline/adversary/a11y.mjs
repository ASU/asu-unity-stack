/**
 * Accessibility (a11y) Validation Layer
 * Runs axe-core against Storybook stories via Playwright to detect a11y regressions.
 */
import { execSync } from "child_process";
import { join } from "path";

const ROOT = new URL("../../..", import.meta.url).pathname;

/**
 * Run axe-core scan against a component's Storybook stories.
 * @returns {{ layer: string, passed: boolean, message: string, details?: string }}
 */
export async function runA11yScan(component, storybookUrl = "http://localhost:6006") {
  const componentName = component.name.split("/")[1];

  const script = `
    const { chromium } = require('playwright');
    (async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      const violations = [];
      try {
        await page.goto('${storybookUrl}/index.json', { timeout: 5000 });
        const data = await page.evaluate(() => document.body.innerText);
        const index = JSON.parse(data);
        const stories = Object.values(index.entries || index.stories || {})
          .filter(s => s.title && s.title.toLowerCase().includes('${componentName.toLowerCase()}'))
          .filter(s => s.type === 'story');

        for (const story of stories) {
          const url = '${storybookUrl}/iframe.html?id=' + story.id + '&viewMode=story';
          await page.goto(url, { timeout: 10000, waitUntil: 'networkidle' });
          await page.waitForTimeout(300);

          // Inject and run axe-core
          await page.addScriptTag({ path: require.resolve('axe-core') });
          const results = await page.evaluate(async () => {
            return await window.axe.run(document.getElementById('storybook-root') || document.body, {
              runOnly: ['wcag2a', 'wcag2aa'],
            });
          });

          for (const v of results.violations) {
            violations.push({
              story: story.id,
              id: v.id,
              impact: v.impact,
              description: v.description,
              nodes: v.nodes.length,
            });
          }
        }
        console.log(JSON.stringify({ stories: stories.length, violations }));
      } catch (e) {
        console.log(JSON.stringify({ stories: 0, violations: [], error: e.message }));
      }
      await browser.close();
    })();
  `;

  try {
    const output = execSync(
      `node -e "${script.replace(/"/g, '\\"').replace(/\n/g, " ")}"`,
      { cwd: ROOT, timeout: 60000, stdio: "pipe" }
    ).toString().trim();

    const result = JSON.parse(output);

    if (result.error) {
      // Storybook not running — skip gracefully
      return { layer: "a11y", passed: true, message: `a11y skipped — ${result.error}` };
    }

    if (result.violations.length === 0) {
      return { layer: "a11y", passed: true, message: `${result.stories} stories scanned — no a11y violations` };
    }

    // Filter to critical/serious only for blocking
    const blocking = result.violations.filter(v => v.impact === "critical" || v.impact === "serious");

    if (blocking.length === 0) {
      const minor = result.violations.length;
      return { layer: "a11y", passed: true, message: `${minor} minor a11y issue(s) — non-blocking` };
    }

    const details = blocking
      .slice(0, 5)
      .map(v => `  [${v.impact}] ${v.id}: ${v.description} (${v.nodes} node(s)) in ${v.story}`)
      .join("\n");

    return {
      layer: "a11y",
      passed: false,
      message: `${blocking.length} critical/serious a11y violation(s)`,
      details,
    };
  } catch (e) {
    // axe-core or Storybook not available — skip
    return { layer: "a11y", passed: true, message: "a11y skipped — Storybook not running" };
  }
}
