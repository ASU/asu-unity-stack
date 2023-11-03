const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");
const common = require("../webpack/webpack.common");

module.exports = {
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/*.stories.js"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          ...common.resolve.alias,
        },
      },
    };
  },
};
