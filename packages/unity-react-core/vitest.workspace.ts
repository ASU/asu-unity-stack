import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    projects: [
      {
        extends: 'vitest.config.ts',
        test: {
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
    ],
  },
});
