import { defineConfig } from '@playwright/test';
import defaultConfig from "../unity-react-core/playwright.config.js";

export default defineConfig({
  ...defaultConfig,
  use: {
    baseURL: 'http://localhost:9080',
    trace: 'on-firstt-retry',
  },
});
