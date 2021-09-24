const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../../");

module.exports = {
  stories: ["../../src/**/*.percy.mdx", "../../src/**/*.percy.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "@storybook/addon-knobs",
  ],
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          Components: path.resolve(PROJECT_DIR, "src/components/"),
          Vendor: path.resolve(PROJECT_DIR, "vendor/"),
        },
      },
    };
  },
};
