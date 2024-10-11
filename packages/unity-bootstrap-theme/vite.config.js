import react from "@vitejs/plugin-react";
import { resolve } from 'path';
import { defineConfig, transformWithEsbuild } from 'vite';

import pkg from './package.json';
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
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2021',
      loader: {
        '.js': 'jsx',
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
        resolve(__dirname, 'src/scss/unity-bootstrap-theme.bundle.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-theme.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-header.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-footer.scss'),
        resolve(__dirname, 'src/js/global-header.js'),
        resolve(__dirname, 'src/js/data-layer.js'),
        resolve(__dirname, '../../node_modules/bootstrap/js/index.esm.js'),
      ],
    },
    outDir: 'dist',
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      treeshake: true,
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('index.esm')) {
            return 'js/bootstrap.bundle.min.[format]';
          }
          return "js/[name].[format]";
        },
        chunkFileNames: "js/[name].[format]",
        assetFileNames: '[name][extname]',
        format: 'es',

      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      },
    },
  },
  server: {
    port: 9000,
  },
};

export default defineConfig(c);
