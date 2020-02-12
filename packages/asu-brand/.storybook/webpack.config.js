const path = require('path');
// use development webpack config
const custom = require('../webpack/webpack.development.js');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};
