import { addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

import './scss-loader.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;
require('bootstrap');

addDecorator(withA11y)
