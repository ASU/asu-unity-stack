
const config = {
  staticDirs: ['../dist'],
  addons: [
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    'storybook-addon-mock',
  ],
  stories: ["../src/**/*.stories.{js,jsx,ts,tsx}"],
  framework: {
    name: "@storybook/react-vite"
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  docs: {
    autodocs: true
  }
};

export default config;
