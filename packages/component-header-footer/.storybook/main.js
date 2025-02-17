const config = {
  // staticDirs: ['../src/**/assets'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.js"],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: "@storybook/react-vite",
  },
};

export default config;
