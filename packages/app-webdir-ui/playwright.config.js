import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.m?js$/,
  timeout: 60000,
  workers: process.env.CI ? 2 : 1,
  webServer: {
    command: 'yarn storybook',
    port: 9030,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:9030',
    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout: 45000,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
