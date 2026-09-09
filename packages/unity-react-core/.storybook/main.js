import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(value)));
}
export default {
  // staticDirs: ['../dist'],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    fileURLToPath(import.meta.resolve("../../../.storybook-config/index.js")),
    fileURLToPath(import.meta.resolve("../../../.storybook-config/dataLayerListener/index.js")),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),

  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  docs: {
    autodocs: "tag",
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  async viteFinal(config) {
    config.server = config.server ?? {};
    config.server.fs = config.server.fs ?? {};
    config.server.fs.allow = [
      ...(config.server.fs.allow ?? []),
      resolve(__dirname, "../../"),
    ];
    return config;
  },
};
