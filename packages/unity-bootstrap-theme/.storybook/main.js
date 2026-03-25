import { dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}

export default {
  staticDirs: ["../dist"],
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    fileURLToPath(import.meta.resolve("./local-addon")),
    fileURLToPath(import.meta.resolve("../../../.storybook-config/index.js")),
    fileURLToPath(import.meta.resolve("../../../.storybook-config/dataLayerListener/index.js")),
    "@whitespace/storybook-addon-html",
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
  },
  docs: {
    autodocs: true,
  },
};
