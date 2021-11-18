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
      },
    };
  },
};
