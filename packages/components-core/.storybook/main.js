const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "@storybook/addon-knobs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        {
          loader: "sass-loader",
          options: {},
        },
      ],
    });

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
