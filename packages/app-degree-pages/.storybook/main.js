const config = {
  staticDirs: ['../dist'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  stories: ["../src/**/*.stories.{js,jsx}"],
  framework: {
    name: "@storybook/react-vite",
  },
  core: {
    builder: '@storybook/builder-vite'
  },
};

export default config;
