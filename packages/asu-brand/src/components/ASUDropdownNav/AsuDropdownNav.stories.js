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
  },
  {
    value: "Item 2",
    href: 'https://asu.edu'
  },
  {
    value: "Item 3",
    href: "https://asu.edu"
  },
  {
    value: "Item 4",
    href: 'https://asu.edu'
  },
  {
    value: "Item 5",
    href: "https://asu.edu"
  },
  {
    value: "Item 6",
    href: 'https://asu.edu'
  },
  {
    value: "Item 7",
    href: "https://asu.edu"
  },
  {
    value: "Item 8",
    href: 'https://asu.edu'
  },
  {
    value: "Item 9",
    href: "https://asu.edu"
  }
]

storiesOf('AsuDropdownNav', module)
  .add('basic', () => (
    <AsuDropdownNav {...{title: 'ASU Home', href:'https://asu.edu', target: '_blank', items: items}}/>
  ));
