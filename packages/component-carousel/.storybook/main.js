const devConfig = require("../webpack/webpack.dev");

module.exports = {
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.js"],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: devConfig.module.rules },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    };
  },
};
