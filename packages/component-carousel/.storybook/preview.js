/** @jsx h */
import { addParameters } from '@storybook/preact';

// @glidejs/glide for Carousels - Import with loader inline.
import "!style-loader!css-loader!sass-loader!../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";
//import "!style-loader!css-loader!sass-loader!../../../node_modules/@glidejs/glide/src/assets/sass/glide.theme.scss";

addParameters({
  a11y: {
    config: {},
    options: {}
  }
});
