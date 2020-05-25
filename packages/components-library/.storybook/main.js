const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-options',
    '@storybook/addon-backgrounds',
    '@storybook/addon-contexts',
    '@storybook/addon-a11y',
  ],
  stories: ['../src/stories/**/*.stories.js'],
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
