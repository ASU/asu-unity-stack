import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

import pkg from "./package.json";

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true, // also necessary
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "unityLib",
      formats: ["es", "cjs", "umd"],
      fileName: format => `unityLib.${format}.js`,
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.ts"),
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    minify: false,
    cssCodeSplit: true,
  },
  plugins: [
    react(),
  ],
});
