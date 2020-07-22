import { addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

import '!style-loader!css-loader!sass-loader!./scss-loader.scss';
import '!style-loader!css-loader!sass-loader!../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;
require('bootstrap');

addDecorator(withA11y)
