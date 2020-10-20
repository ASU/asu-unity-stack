const path = require("path");

module.exports = {
  stories: [
    '../stories/*.stories.js',
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
};
