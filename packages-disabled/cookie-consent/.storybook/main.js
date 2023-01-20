module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    "@storybook/preset-scss",
  ],
  webpackFinal: config => {
    config.resolve.alias = {
      "react": "preact/compat",
      "react-dom": "preact/compat",
    };

    return config;
  },
};
