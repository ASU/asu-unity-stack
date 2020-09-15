const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  stories: ['../src/**/*.stories.js'],
}
