import { defineConfig, transformWithEsbuild } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "AsuRfi",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `appRfi.${format}.js`,
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
    minify: true,
    cssCodeSplit: false,
  },
  esbuild: {
    legalComments: 'eof',
    keepNames: false,
  },
  define: {
    process: {env: {NODE_ENV: process.env.NODE_ENV}},
    global: {}
  },
  plugins: [
    react(),
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
      name: 'inline-css',
      enforce: 'post',
      generateBundle(options, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type === 'asset' && file.fileName.endsWith('.css')) {
            const jsFile = Object.values(bundle).find(f => f.type === 'chunk' && (f.fileName.endsWith('.js') || f.fileName.endsWith('.mjs')));
            if (jsFile) {
              jsFile.code += `\n(function() {
                var css = \`${file.source.toString().replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
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
          }
        }
      }
    },
  ],
});
