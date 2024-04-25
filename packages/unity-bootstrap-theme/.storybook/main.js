import { mergeConfig } from 'vite';
import { default as localAddon } from "./local-addon/preset.js";
// import { resolve } from 'path';

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  // staticDirs: ['../dist'],
  stories: ["../**/*.js.stories.mdx", "../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "./local-addon/preset.js",
    // "../../../.storybook-config",
    // "../../../.storybook-config/dataLayerListener",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(a, b, c) {

    // a.entry = Array.from(new Set(a.entry));
    console.log("a", a)
    // Be sure to return the customized config
    return mergeConfig(a, {
      // Customize the Vite config for Storybook
      resolve: {
        preserveSymlinks: true,
        alias: {
          // foo: 'bar'
        },
      },
    });
  },


  docs: {
    autodocs: true
  }
};

export default config;
