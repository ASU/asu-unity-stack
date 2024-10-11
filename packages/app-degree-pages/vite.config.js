import { defineConfig, transformWithEsbuild } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import pkg from './package.json';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "AsuDegreePages",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `degreePages.${format}.js`,
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.js"),
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM"
        },
    },
    },
    minify: false,
  },
  esbuild: {
    legalComments: 'none',
    keepNames: true,
  },
  define: {
    process: {env: {NODE_ENV: process.env.NODE_ENV}},
    global: {}
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
		}),
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
});
