const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");
let devConfig = require("../webpack/webpack.dev");

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
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {
          // this is needed to compile components-core components which inject css classes
          Vendor: path.resolve(PROJECT_DIR, "vendor/"),
        },
      },
    };
  },
};
