import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: 'vitest.config.ts',
    test: {
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        providerOptions: {},
      },
    },
  },
])
