import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, transformWithEsbuild } from "vite";

import pkg from "./package.json";

const getName = ({originalFileNames}) => {
  // regex matches string after last slash and before the last dot
  // e.g. /path/to/file.css -> file
  // e.g. /path/to/file.min.css -> file.min
  const name = originalFileNames?.at(0)?.match(/\/([^/]*)?\..*$/).at(1) || "[name]";
  return name;
}

/** @type {import('vite').UserConfig} */
const c = {
  root: resolve(__dirname),
  plugins: [
    react(),
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/stories\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: "es2021",
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssMinify: true,
    cssCodeSplit: true,
    outDir: "dist",
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), "chart.js"],
      treeshake: true,
      input: [
        resolve(__dirname, "src/scss/unity-bootstrap-theme.bundle.scss"),
        resolve(__dirname, "src/scss/unity-bootstrap-theme.scss"),
        resolve(__dirname, "src/scss/unity-bootstrap-header-footer.scss"),
      ],
      output: {
        globals: {
          "chart.js": "Chart",
        },
        entryFileNames: (info) => `js/${getName(info)}.[format].js`,
        chunkFileNames: (info) => `js/${getName(info)}.[format].js`,
        assetFileNames: (info) => `css/${getName(info)}.[ext]`,
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: /.*\.jsx?$/,
    exclude: [],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  server: {
    port: 9000,
  },
  resolve: {
    alias: [
      {
        find: "@shared",
        replacement: resolve(__dirname, "../../shared"),
      },
    ],
  },
};

export default defineConfig(c);
