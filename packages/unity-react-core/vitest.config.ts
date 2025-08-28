import { defineConfig } from 'vitest/config';
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["./src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    exclude: ["tests/*"]
  },
  define: {
    "process.env": JSON.stringify({}),
  },
  resolve: {
    alias: {
      "@asu/shared": resolve(__dirname, "../shared"),
    },
  },
});

declare global {
  interface Window {
    dataLayer: any[];
  }
}
