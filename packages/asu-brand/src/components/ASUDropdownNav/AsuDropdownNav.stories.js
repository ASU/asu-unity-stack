import React from 'react';
import { storiesOf } from '@storybook/react';
import AsuDropdownNav from './index.js';

const items = [
  {
    value: "Item 0",
    href: 'https://asu.edu'
  },
  {
    value: "Item 1",
    href: "https://asu.edu"
  }
]

storiesOf('AsuDropdownNav', module)
  .add('basic', () => (
    <AsuDropdownNav {...{title: 'ASU Home', items: items}}/>
  ));
