/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["./src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
  define: {
    "process.env": JSON.stringify({}),
  },
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "./../../shared"),
    },
  },
});

declare global {
  interface Window {
    dataLayer: any[];
  }
}
