import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";

import pkg from './package.json';
/** @typedef {import('vite').UserConfig} UserConfig */

/** @type {UserConfig} */
const c = {
  root: resolve(__dirname, 'src'),
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2021',
    },
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssMinify: false,
    cssCodeSplit: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/scss/unity-bootstrap-theme-bundle.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-theme.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-header.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-footer.scss'),
      ],
      name: 'unity-bootstrap-theme',
      fileName: '[name]',
    },
    outDir: '../dist',
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
  server: {
    port: 9000,
  },
};

export default defineConfig(c);
