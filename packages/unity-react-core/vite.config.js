import { defineConfig, transformWithEsbuild, loadEnv } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "unityReactCore",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.js"),
      external: ["react", "react-dom"],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM"
        },
      },
    },
    minify: false,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "types/main.d.ts",
          dest: "",
        },
      ],
    }),
  ],
});
