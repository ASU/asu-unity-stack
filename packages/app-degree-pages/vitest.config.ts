/// <reference types="vitest/config" />

import { defineConfig } from 'vitest/config';
import { resolve } from "path";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    include: ['./src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "./../../shared"),
    }
  },
});

