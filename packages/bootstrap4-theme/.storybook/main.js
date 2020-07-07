const path = require("path");

module.exports = {
  stories: [
    '../docs/**/Intro.stories.mdx',
    '../docs/**/QuickStart.stories.mdx',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.[tj]s',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    'storybook-addon-xd-designs',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};
