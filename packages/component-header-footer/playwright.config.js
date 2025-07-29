import { defineConfig } from '@playwright/test';
import defaultConfig from "../unity-react-core/playwright.config.js";

export default defineConfig({
  ...defaultConfig,
  use: {
    baseURL: 'http://localhost:9080',
    trace: 'on-first-retry',
  },
  webServer: {
      command: 'yarn storybook',
      port: 9080,
      reuseExistingServer: !process.env.CI,
    },
  });
