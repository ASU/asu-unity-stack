const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  stories: ['../src/**/*.stories.js'],
  webpackFinal: config => {
    config.module.rules.push({
      test: [/\.stories\.js$/],
      loaders: [require.resolve('@storybook/source-loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre',
    });
    return config;
  },
}
