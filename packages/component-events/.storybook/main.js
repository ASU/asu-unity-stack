const common = require("../webpack/webpack.common");

const config = {
  staticDirs: ['../dist'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    'storybook-addon-mock',
  ],
  stories: ["../src/**/*.stories.js"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
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

  docs: {
    autodocs: true
  }
};

export default config;
