// const webpack = require('./webpack');

module.exports = {
  // webpack: webpack,
  // managerWebpack: webpack,
  config: function config(entry = []) {
    return [...entry, require.resolve('./entry.js')];
  },
  managerEntries: function managerEntries(entry = []) {
    return [...entry, require.resolve('./addon.js')];
  },
  // hide extra viewport toolbar options
  managerHead: (head) => `
  ${head}
  <style>
    button[title="Rotate viewport"],
    div[title="Viewport height"] {
      display: none;
    }
    #storybook-preview-iframe{
      min-height: 30vh;
      height: calc(100% - 20px);
    }
  </style>
  `,
};
