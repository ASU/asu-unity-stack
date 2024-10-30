import react from "@vitejs/plugin-react";
import { resolve } from 'path';
import { defineConfig, transformWithEsbuild, loadEnv } from 'vite';

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
    sourcemap: false,
    cssMinify: true,
    cssCodeSplit: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/scss/unity-bootstrap-theme.bundle.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-theme.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-header.scss'),
        resolve(__dirname, 'src/scss/unity-bootstrap-footer.scss'),
      ],
    },
    outDir: 'dist',
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      treeshake: true,
      output: {
        entryFileNames: (chunkInfo) => {
          return "js/unityBootstrap.bundle.js";
        },
        chunkFileNames: "js/[name].[format].js",
        assetFileNames: '[name][extname]',
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

export default defineConfig(({ mode}) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  if (env.VITE_BUILD_UMD === 'true') {
    return {
      ...c,
      build: {
        ...c.build,
        emptyOutDir: false,
        lib: {
          ...c.build.lib,
          entry: resolve(__dirname, 'src/js/index.js'),
          formats: ['amd'],
          fileName: 'unity-bootstrap-theme.bundle.js',
        },
    }
  }
};
  return c;
});
