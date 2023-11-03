const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");
const common = require("../webpack/webpack.common");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [".js", ".jsx"],
        alias: {
          ...common.resolve.alias,
          Components: path.resolve(PROJECT_DIR, "src/components/"),
        },
      },
    };
  },
};
