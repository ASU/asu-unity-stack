import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, transformWithEsbuild } from "vite";

import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "unityReactCore",
      formats: ["es", "cjs", "umd"],
      fileName: format => `unityReactCore.${format}.js`,
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.js"),
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    minify: "terser",
    cssCodeSplit: false,
  },
  esbuild: {
    legalComments: "none",
    keepNames: false,
  },
  define: {
    process: { env: { NODE_ENV: process.env.NODE_ENV } },
    global: {},
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
    {
      name: "inline-css",
      enforce: "post",
      generateBundle: (options, bundle) => {
        // eslint-disable-next-line array-callback-return
        Object.values(bundle).map(file => {
          if (file.type === "asset" && file.fileName.endsWith(".css")) {
            const jsFile = Object.values(bundle).find(
              f => f.type === "chunk" && f.fileName.endsWith(".js")
            );
            if (jsFile) {
              jsFile.code += `\n(function() {
                var css = \`${file.source
                  .toString()
                  .replace(/`/g, "\\`")
                  .replace(/\$/g, "\\$")}\`;
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(style);
              })();`;
            }
            // eslint-disable-next-line no-param-reassign
            delete bundle[file.fileName];
          }
        });
      },
    },
  ],
});
