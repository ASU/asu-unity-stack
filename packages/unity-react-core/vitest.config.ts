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
      // @glidejs/glide has "type":"module" but "main" points to a UMD file;
      // force resolution to the proper ESM build
      "@glidejs/glide": resolve(
        __dirname,
        "../../node_modules/@glidejs/glide/dist/glide.esm.js"
      ),
    },
  },
});

declare global {
  interface Window {
    dataLayer: any[];
  }
}
