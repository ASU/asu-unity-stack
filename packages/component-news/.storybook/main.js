const common = require("../webpack/webpack.common");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.js"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: common.module.rules },
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          ...common.resolve.alias,
          "shared": path.resolve(PROJECT_DIR, "..", "..", "shared"),
        },
      },
    };
  },
};
