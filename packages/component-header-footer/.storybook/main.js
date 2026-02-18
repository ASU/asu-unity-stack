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
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
  },
  async viteFinal(config) {
    // Configure optimizeDeps to handle JSX in .js files
    config.optimizeDeps = {
      ...config.optimizeDeps,
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        loader: {
          ".js": "jsx",
          ".jsx": "jsx",
        },
      },
    };

    // Configure esbuild for build
    config.esbuild = {
      ...config.esbuild,
      loader: "jsx",
      include: /\.(jsx?|tsx?)$/,
    };

    return config;
  },
};

export default config;
