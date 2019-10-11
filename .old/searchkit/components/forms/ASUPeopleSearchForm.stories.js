import React from 'react';
import { storiesOf } from '@storybook/react';
import ASUPeopleSearchForm from './ASUPeopleSearchForm';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


const stories = storiesOf('ASUPeopleSearchForm', module);

stories.addDecorator(withKnobs);

stories.add('basic', () => (
  <ASUPeopleSearchForm apikey={text('apikey', '')} />
));

  