const glob = require('glob');

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "nesting-rules": true
      }
    },
    '@fullhuman/postcss-purgecss': {
      content: glob.sync('./src/**/*.{js,jsx}', {follow: true, nodir: true}),
      rejected: true,
      whitelist: [

      ]
    }
  }
};
