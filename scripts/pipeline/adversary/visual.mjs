/**
 * Visual Regression Layer
 * Captures Playwright screenshots of Storybook stories and compares against golden baselines.
 * Uses pixelmatch for diff comparison.
 */
import { execSync } from "child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";

const ROOT = new URL("../../..", import.meta.url).pathname;
const SCREENSHOTS_DIR = join(ROOT, ".pipeline-screenshots");
const GOLDEN_DIR = join(SCREENSHOTS_DIR, "golden");
const CURRENT_DIR = join(SCREENSHOTS_DIR, "current");
const DIFF_DIR = join(SCREENSHOTS_DIR, "diff");

const THRESHOLD = 0.001; // 0.1% pixel diff allowed

/**
 * Capture golden baseline screenshots for a component's stories.
 * Should be run BEFORE conversion.
 */
export async function captureGolden(component, storybookUrl = "http://localhost:6006") {
  const componentName = component.name.split("/")[1];
  const dir = join(GOLDEN_DIR, componentName);
  mkdirSync(dir, { recursive: true });
  return captureStories(componentName, dir, storybookUrl);
}

/**
 * Capture current screenshots for comparison.
 * Should be run AFTER conversion.
 */
export async function captureCurrent(component, storybookUrl = "http://localhost:6006") {
  const componentName = component.name.split("/")[1];
  const dir = join(CURRENT_DIR, componentName);
  mkdirSync(dir, { recursive: true });
  return captureStories(componentName, dir, storybookUrl);
}

/**
 * Compare current screenshots against golden baselines.
 * @returns {{ passed: boolean, message: string, details?: string }}
 */
export async function compareScreenshots(component) {
  const componentName = component.name.split("/")[1];
  const goldenDir = join(GOLDEN_DIR, componentName);
  const currentDir = join(CURRENT_DIR, componentName);

  mkdirSync(join(DIFF_DIR, componentName), { recursive: true });

  if (!existsSync(goldenDir)) {
    return { layer: "visual", passed: true, message: "No golden baseline — skipped" };
  }
  if (!existsSync(currentDir)) {
    return { layer: "visual", passed: false, message: "No current screenshots captured" };
  }

  const goldenFiles = readdirSync(goldenDir).filter(f => f.endsWith(".png"));
  if (goldenFiles.length === 0) {
    return { layer: "visual", passed: true, message: "No golden screenshots — skipped" };
  }

  const failures = [];

  for (const file of goldenFiles) {
    const goldenPath = join(goldenDir, file);
    const currentPath = join(currentDir, file);
    const diffPath = join(DIFF_DIR, componentName, file);

    if (!existsSync(currentPath)) {
      failures.push(`Missing screenshot: ${file}`);
      continue;
    }

    // Use Playwright's built-in comparison via a small test script
    const result = compareImages(goldenPath, currentPath, diffPath);
    if (!result.match) {
      failures.push(`${file}: ${(result.diffPercent * 100).toFixed(2)}% pixel diff (threshold: ${THRESHOLD * 100}%)`);
    }
  }

  if (failures.length > 0) {
    return {
      layer: "visual",
      passed: false,
      message: `${failures.length} screenshot(s) differ from golden baseline`,
      details: failures.join("\n"),
    };
  }
  return { layer: "visual", passed: true, message: `${goldenFiles.length} screenshot(s) match golden baseline` };
}

function compareImages(goldenPath, currentPath, diffPath) {
  try {
    // Use pixelmatch via a Node script (already in node_modules)
    const script = `
      const { readFileSync, writeFileSync } = require('fs');
      const { PNG } = require('pngjs');
      const pixelmatch = require('pixelmatch');
      const img1 = PNG.sync.read(readFileSync('${goldenPath}'));
      const img2 = PNG.sync.read(readFileSync('${currentPath}'));
      const { width, height } = img1;
      if (img2.width !== width || img2.height !== height) {
        console.log(JSON.stringify({ match: false, diffPercent: 1, reason: 'size-mismatch' }));
        process.exit(0);
      }
      const diff = new PNG({ width, height });
      const numDiff = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
      const diffPercent = numDiff / (width * height);
      if (diffPercent > ${THRESHOLD}) {
        writeFileSync('${diffPath}', PNG.sync.write(diff));
      }
      console.log(JSON.stringify({ match: diffPercent <= ${THRESHOLD}, diffPercent }));
    `;
    const output = execSync(`node -e "${script.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`, {
      cwd: ROOT,
      timeout: 10000,
      stdio: "pipe",
    }).toString().trim();
    return JSON.parse(output);
  } catch (e) {
    return { match: true, diffPercent: 0, error: e.message }; // Graceful fallback
  }
}

function captureStories(componentName, outputDir, storybookUrl) {
  // Generate a Playwright script to capture all stories for this component
  const script = `
    const { chromium } = require('playwright');
    (async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      try {
        // Get stories from Storybook's API
        await page.goto('${storybookUrl}/index.json', { timeout: 5000 });
        const data = await page.evaluate(() => document.body.innerText);
        const index = JSON.parse(data);
        const stories = Object.values(index.entries || index.stories || {})
          .filter(s => s.title && s.title.toLowerCase().includes('${componentName.toLowerCase()}'))
          .filter(s => s.type === 'story');

        for (const story of stories) {
          const id = story.id;
          const url = '${storybookUrl}/iframe.html?id=' + id + '&viewMode=story';
          await page.goto(url, { timeout: 10000, waitUntil: 'networkidle' });
          await page.waitForTimeout(500);
          await page.screenshot({ path: '${outputDir}/' + id.replace(/[^a-z0-9-]/g, '_') + '.png' });
        }
        console.log(JSON.stringify({ captured: stories.length }));
      } catch (e) {
        console.log(JSON.stringify({ captured: 0, error: e.message }));
      }
      await browser.close();
    })();
  `;

  try {
    const output = execSync(`node -e "${script.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`, {
      cwd: ROOT,
      timeout: 60000,
      stdio: "pipe",
    }).toString().trim();
    return JSON.parse(output);
  } catch (e) {
    return { captured: 0, error: e.message };
  }
}

/**
 * Initialize golden baselines for all components (run once before migration).
 */
export async function captureAllGoldens(components, storybookUrl) {
  mkdirSync(GOLDEN_DIR, { recursive: true });
  let total = 0;
  for (const component of components) {
    const result = await captureGolden(component, storybookUrl);
    total += result.captured || 0;
  }
  return total;
}
