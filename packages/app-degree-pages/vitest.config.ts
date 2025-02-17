/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import { resolve } from "path";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true
  },
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "./../../shared"),
    }
  },
});

