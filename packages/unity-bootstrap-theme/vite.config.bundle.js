import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

import baseConfig from "./vite.config.js";

export default defineConfig(
  (/** @type {import('vite').ConfigEnv} */ _) => {

    return {
      ...baseConfig,
      plugins: [
        {
          name: "copy",
          closeBundle() {
            fs.mkdirSync(resolve(__dirname, "dist/js"), {
              recursive: true,
            });
            fs.copyFileSync(
              resolve(
                __dirname,
                "../../node_modules",
                "bootstrap/dist/js/bootstrap.bundle.min.js"
              ),
              resolve(__dirname, "dist/js/bootstrap.bundle.min.js")
            );
            fs.copyFileSync(
              resolve(
                __dirname,
                "../../node_modules",
                "chart.js/dist/chart.min.js"
              ),
              resolve(__dirname, "dist/js/chart.min.js")
            );
          },
        },
      ],
      build: {
        ...baseConfig.build,
        emptyOutDir: false,
        lib: {
          entry: resolve(__dirname, "src/js/unity-bootstrap.js"),
          formats: ["umd", "cjs", "es"],
          name: "unityBootstrap",
        },
        rollupOptions: {
          ...baseConfig.build.rollupOptions,
          input: undefined,
        },
      },
    };
  }
);
