import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
            // Hold and release the pointer where it already is (userEvent only offers click).
            commands: {
              pointerDown: async ({ page }) => {
                await page.mouse.down();
              },
              pointerUp: async ({ page }) => {
                await page.mouse.up();
              },
            },
          },
          setupFiles: [".storybook/vitest.setup.js"],
        },
      },
    ],
  },
});
