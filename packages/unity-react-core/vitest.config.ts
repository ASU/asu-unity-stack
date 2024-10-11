/// <reference types="vitest/config" />

import type { ExpectPollOptions } from '@vitest/expect';

import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "./../../shared"),
    }
  },
});

declare global {
  interface Window{
    dataLayer: any[];
  }
}
