import React from 'react';
import { storiesOf } from '@storybook/react';
import ASUDropdownMenu from './AsuDropdownMenu';

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


storiesOf('ASUDropdownMenu', module)
  .add('basic', () => (
    <ASUDropdownMenu {...{title: 'ASU Home', items: items}}/>
  ));
