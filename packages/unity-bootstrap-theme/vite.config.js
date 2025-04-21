import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import fs from "fs";
import { defineConfig, transformWithEsbuild } from "vite";

import pkg from "./package.json";
/** @typedef {import('vite').UserConfig} UserConfig */

/** @type {UserConfig} */
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
    {
      name: 'copy-bootstrap-umd-to-dist',
      // See https://vite.dev/guide/api-plugin#universal-hooks for closeBundle info
      closeBundle() {
        const srcPath = path.resolve(__dirname, "../../node_modules", 'bootstrap/dist/js/bootstrap.bundle.min.js');
        const destDir = path.resolve(__dirname, 'dist/js/bootstrap.bundle.min.js');

        fs.copyFileSync(srcPath, destDir);
      }
    }
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
    lib: {
      entry: [
        resolve(__dirname, "src/scss/unity-bootstrap-theme.bundle.scss"),
        resolve(__dirname, "src/scss/unity-bootstrap-theme.scss"),
        resolve(__dirname, "src/scss/unity-bootstrap-header.scss"),
        resolve(__dirname, "src/scss/unity-bootstrap-footer.scss"),
        resolve(__dirname, "src/js/global-header.js"),
        resolve(__dirname, "src/js/data-layer.js"),
        resolve(__dirname, "../../node_modules/bootstrap/js/index.esm.js"),
      ],

    },
    outDir: "dist",
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      treeshake: true,
      output: {
        entryFileNames: chunkInfo => {
          if (chunkInfo.name.includes("index.esm")) {
            return "js/bootstrap.bundle.min.[format]";
          }
          return "js/[name].[format]";
        },
        chunkFileNames: "js/[name].[format]",
        assetFileNames: (assetInfo) => {
          if (assetInfo.originalFileNames && assetInfo.originalFileNames[0].includes("bundle")) {
            return "css/unity-bootstrap-theme.bundle.[ext]";
          }
          return "css/[name].[ext]";
        },
        format: "es",
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
};

export default defineConfig(c);
