module.exports = {
  stories: [
    "../../tests/**/*.percy.mdx",
    "../../tests/**/*.percy.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
  ],
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
      },
    };
  },
};
