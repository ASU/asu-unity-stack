const config = {
  staticDirs: ['../dist'],
  stories: ["../**/*.js.stories.mdx", "../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "./local-addon",
    "../../../.storybook-config",
    "../../../.storybook-config/dataLayerListener",
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
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        {
          loader: "sass-loader",
          options: {},
        },
      ],
    });

    config.entry = Array.from(new Set(config.entry));

    return config;
  },

  docs: {
    autodocs: true
  }
};

export default config;
