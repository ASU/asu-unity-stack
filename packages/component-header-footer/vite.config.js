//@ts-check
import { defineConfig, transformWithEsbuild, loadEnv } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const componentMap = {
  header: {
    globalUmdName: "AsuHeader",
    fileName: "asuHeader",
  },
  footer: {
    globalUmdName: "AsuFooter",
    fileName: "asuFooter",
  }
};

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_COMPONENT_TO_BUILD } = env;
  const umdName = componentMap[VITE_COMPONENT_TO_BUILD].globalUmdName;
  const fileName = componentMap[VITE_COMPONENT_TO_BUILD].fileName;

  if (!VITE_COMPONENT_TO_BUILD) {
    throw new Error(`Error parsing environment variable VITE_COMPONENT ${VITE_COMPONENT_TO_BUILD}`);
  };

  return {
    build: {
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, `src/${VITE_COMPONENT_TO_BUILD}/index.js`),
        name: umdName,
        formats: ["es", "cjs", "umd"],
        fileName: (format) => `${fileName}.${format}.js`,
      },
      rollupOptions: {
        input: resolve(__dirname, "src/header/index.js"),
        external: ["react", "react-dom"],
        output: {
          globals: {
            "react": "React",
            "react-dom": "ReactDOM"
          },
        },
      },
      minify: "terser",
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
  }
});
