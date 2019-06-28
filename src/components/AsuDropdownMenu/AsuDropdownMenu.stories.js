import React from 'react';
import { storiesOf } from '@storybook/react';
import ASUDropdownMenu from './AsuDropdownMenu';




storiesOf('ASUDropdownMenu', module)
  .add('basic', () => (
    <ASUDropdownMenu {...{title: 'ASU Home'}}/>
  ));