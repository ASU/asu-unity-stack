// .happo.js
const { RemoteBrowserTarget } = require('happo.io');
const happoPluginStorybook = require('happo-plugin-storybook');
require('dotenv').config();

module.exports = {
  apiKey: process.env.HAPPO_KEY,
  apiSecret: process.env.HAPPO_SECRET,
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1280x1024',
    }),
    firefox: new RemoteBrowserTarget('firefox', {
      viewport: '1280x1024',
    }),
    edge: new RemoteBrowserTarget('edge', {
      viewport: '1200x1024',
    }),
    safari: new RemoteBrowserTarget('safari', {
      viewport: '1200x1024',
    }),
    'ios-safari': new RemoteBrowserTarget('ios-safari', {
      viewport: '375x667',
    }),
  },
  plugins: [
    // see https://github.com/happo/happo-plugin-storybook for a list of options you can pass to the plugin
    happoPluginStorybook(),
  ],
  type: 'plain',
};
