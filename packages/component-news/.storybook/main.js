const config = {
  staticDirs: ['../dist'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    'storybook-addon-mock',
  ],
  stories: ["../src/**/*.stories.{js,jsx,ts,tsx}"],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: "@storybook/react-vite",
  },
  docs: {
    autodocs: true
  }
};

export default config;
