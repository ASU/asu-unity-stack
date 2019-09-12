const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack/webpack.storybook.js');

console.log(custom);

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};
