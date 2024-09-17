import { defineConfig, transformWithEsbuild } from "vite";
import { resolve } from "path";
import { readdirSync } from "fs";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

const COMPONENT = parseInt(process.env.NUMBER);
const componentsToIgnore = ["FeedAnatomy", "Loader"];

if (isNaN(COMPONENT)) {
  throw new Error("Error parsing number", COMPONENT);
}

function getComponentEntries() {
  const componentsDir = resolve(__dirname, "src/components");
  const files = readdirSync(componentsDir);
  const entries = [];

  files.forEach(file => {
    if (file.endsWith(".js")) return;
    if (componentsToIgnore.some(component => file.includes(component))) return;
    const name = file.replace(/\.[^/.]+$/, "");
    entries.push({
      location: resolve(componentsDir, `${name}/init.js`),
      name,
    });
  });
  return entries;
};

const { location: LOCATION, name: EXPORT_NAME } =
  getComponentEntries()[COMPONENT];

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist/umd/components",
    lib: {
      entry: LOCATION,
      name: `init${EXPORT_NAME}`,
      formats: ["umd"],
      fileName: format => `${EXPORT_NAME}.${format}.js`,
    },
    rollupOptions: {
      input: LOCATION,
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
            const jsFile = Object.values(bundle).find(f => f.type === 'chunk' && f.fileName.endsWith('.js'));
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
            delete bundle[file.fileName];
          }
        }
      }
    }
  ],
});
