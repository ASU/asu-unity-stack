import { dirname, join } from "path";
export default {
  // staticDirs: ['../dist'],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "../.storybook-configv8",
    "../.storybook-configv8/dataLayerListener",
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-css-modules-preset"),
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  docs: {
    autodocs: "tag",
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
