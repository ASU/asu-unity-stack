/** @jsx h */

import { h } from 'preact';
import { linkTo } from '@storybook/addon-links';

import Welcome from '.';

export default {
  title: 'Welcome',
  parameters: {
    component: Welcome,
  },
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
