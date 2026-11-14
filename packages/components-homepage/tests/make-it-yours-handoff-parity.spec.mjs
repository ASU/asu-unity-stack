import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { test, expect } from "@playwright/test";
// WWWCMS-237 F8: handoff/WWWCMS-237/markup.html is the Twig-parity source of truth for Stage B. It must equal
// makeItYoursHtml() once whitespace is normalized (the same basis the HtmlParity story uses). No browser needed.
// The package has no "type": "module", so Playwright loads .js as CommonJS; the markup module is run in a child
// Node instead, with the same command that exports markup.html.
// Regenerate: node --input-type=module -e "import { makeItYoursHtml } from './packages/components-homepage/src/components/make-it-yours/make-it-yours-markup.js'; process.stdout.write(makeItYoursHtml());" > handoff/WWWCMS-237/markup.html
const normalize = html =>
  html.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();
const MARKUP_MODULE = new URL(
  "../src/components/make-it-yours/make-it-yours-markup.js",
  import.meta.url
).href;
const HANDOFF = new URL(
  "../../../handoff/WWWCMS-237/markup.html",
  import.meta.url
);
test("handoff markup.html matches makeItYoursHtml()", () => {
  const rendered = execFileSync(
    process.execPath,
    [
      "--input-type=module",
      "-e",
      `import { makeItYoursHtml } from ${JSON.stringify(MARKUP_MODULE)}; process.stdout.write(makeItYoursHtml());`,
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
  );
  const file = readFileSync(HANDOFF, "utf8");
  expect(rendered.length).toBeGreaterThan(1000);
  expect(normalize(file)).toBe(normalize(rendered));
});
