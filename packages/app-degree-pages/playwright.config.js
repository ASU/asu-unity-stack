import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.m?js$/,
  timeout: 30000,
  workers: process.env.CI ? 2 : 1,
  webServer: {
    command: 'yarn storybook',
    port: 9010,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:9010',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', headless: false },
    },
  ],
});
