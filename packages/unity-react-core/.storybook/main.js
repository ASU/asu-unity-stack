const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");

export default {
  staticDirs: ['../dist'],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  framework: {
    name: "@storybook/react-vite",
  },

  docs: {
    autodocs: true
  }
};
