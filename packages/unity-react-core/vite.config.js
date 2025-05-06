import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import { defineConfig } from "vite";

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
    minify: true,
    cssCodeSplit: true,
  },
  esbuild: {
    legalComments: "eof",
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
            // TODO: Check with Dave.
            // Why was this here? At least during Storybook build,
            // it was causing the CSS to be removed from the build.
            // delete bundle[file.fileName];
          }
        });
      },
    },
  ],
  // optimizeDeps: {
  //   force: true,
  // },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./../../shared"),
      "@asu/unity-bootstrap-theme": path.resolve(
        __dirname,
        "./../unity-bootstrap-theme"
      ),
    },
  },
});
