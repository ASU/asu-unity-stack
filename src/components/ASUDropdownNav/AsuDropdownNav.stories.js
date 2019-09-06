import React from 'react';
import { storiesOf } from '@storybook/react';
import AsuDropdownNav from './AsuDropdownNav';

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


storiesOf('AsuDropdownNav')
  .add('basic', () => (
    <AsuDropdownNav {...{title: 'ASU Home', items: items}}/>
  ));
