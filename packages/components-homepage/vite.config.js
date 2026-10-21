import { resolve } from "path";
import { defineConfig } from "vite";

const c = {
  root: resolve(__dirname),
  build: {
    emptyOutDir: true,
    sourcemap: true,
    cssMinify: true,
    cssCodeSplit: true,
    outDir: "dist",
    rollupOptions: {
      treeshake: true,
      input: {
        "components-homepage": resolve(__dirname, "src/js/index.js"),
        "components-homepage.style": resolve(
          __dirname,
          "src/scss/components-homepage.scss"
        ),
      },
      output: {
        entryFileNames: "js/[name].[format].js",
        chunkFileNames: "js/[name].[format].js",
        assetFileNames: "css/[name].[ext]",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "legacy",
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "legacy-js-api",
        ],
      },
    },
  },
};

export default defineConfig(c);
