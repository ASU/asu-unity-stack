const common = require("../webpack/webpack.common");

module.exports = {
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.js"],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: common.module.rules },
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          ...common.resolve.alias,
        },
      },
    };
  },
};
