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

export const parameters = {
  options: {
    storySort: {
      order: ['Design', ['Colors', 'Typography', 'Layout', 'Icons', 'Backgrounds', 'Focus States'], 'Components', 'Content Sections', 'Docs', ['Global Header', ['Header top', 'Header main', 'Navbar options', 'No navigation']]],
    },
  },
};

