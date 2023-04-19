module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.jsx',
    '../stories/**/*.stories.[tj]s',
    '../stories/**/*.templates.[tj]s',
    '../stories/**/*.examples.[tj]s',
    '../stories/**/*.templates.stories.js',
    '../stories/**/*.examples.stories.js',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    'storybook-addon-xd-designs',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        {
          loader: 'sass-loader',
          options: {},
        },
      ],
    });

    // Return the altered config
    return config;
  },
};
