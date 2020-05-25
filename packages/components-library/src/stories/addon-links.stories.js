/** @jsx h */

import { h } from 'preact';

import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button';

export default {
  title: 'Addons/Links',
};

export const GoToWelcome = () => (
  <Button onclick={linkTo('Welcome')}>This button links to Welcome</Button>
);

GoToWelcome.story = {
  name: 'Go to welcome',
};
