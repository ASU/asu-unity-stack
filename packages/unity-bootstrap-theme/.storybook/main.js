const path = require("path");

export default {
  staticDirs: ['../dist'],
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: "@storybook/react-vite",
  },
  docs: {
    autodocs: true
  }
};
