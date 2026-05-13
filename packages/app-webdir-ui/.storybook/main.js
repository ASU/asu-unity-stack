import { dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}

const config = {
  addons: [
    fileURLToPath(import.meta.resolve("../../../.storybook-config/index.js")),
    fileURLToPath(import.meta.resolve("../../../.storybook-config/dataLayerListener/index.js")),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  stories: ["../src/**/*.stories.js"],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
  },
};

export default config;
