const path = require('path');
// use development webpack config
let custom = require('../webpack.config.js');
custom = custom[0];

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules }, resolve: {...config.resolve, alias: custom.resolve.alias }}
};
