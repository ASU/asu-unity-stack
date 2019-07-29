import { configure, addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import 'happo-plugin-storybook/register';

import WebFont from 'webfontloader';
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';
import '!style-loader!css-loader!sass-loader!../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;
require('bootstrap');

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif']
  }
});

addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
const loadStories = () => {
  req.keys().forEach(req);
}

configure(loadStories, module);
