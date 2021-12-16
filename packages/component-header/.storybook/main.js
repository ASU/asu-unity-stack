const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");
const common = require("../webpack/webpack.common");

module.exports = {
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/*.stories.js"],
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
