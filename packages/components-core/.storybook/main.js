const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "../");

const config = {
  staticDirs: ['../dist'],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
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

  docs: {
    autodocs: true
  }
};
export default config;
