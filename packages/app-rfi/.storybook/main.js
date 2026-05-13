import { dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}

const config = {
  staticDirs: ['../dist'],
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    fileURLToPath(import.meta.resolve("../../../.storybook-config/index.js")),
    fileURLToPath(import.meta.resolve("../../../.storybook-config/dataLayerListener/index.js")),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
  },
  docs: {
    autodocs: false
  }
};

export default config;
