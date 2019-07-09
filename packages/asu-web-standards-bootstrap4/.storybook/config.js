import { configure, addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme/html';
import 'happo-plugin-storybook/register';

import WebFont from 'webfontloader';
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif']
  }
});

addDecorator(withA11y)

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    // theme: basicTheme,
    // theme: themes.dark,
  },
  readme: {
    codeTheme: 'github',
  },
});
addDecorator(addReadme);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
const loadStories = () => {
  req.keys().forEach(req);
}

configure(loadStories, module);
