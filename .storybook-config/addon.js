import { Separator } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { Select } from './components/select';
import { Toggle } from './components/toggle';
import React from 'react';

addons.register('uds', () => {
  addons.add('uds', {
    title: 'UDS',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
      <>
        <Separator />
        <Select parameter="uds" global="template"/>
        <Toggle parameter="uds" global="header">Header</Toggle>
        <Toggle parameter="uds" global="footer">Footer</Toggle>
        <Toggle parameter="uds" global="columns">Columns</Toggle>
      </>
    )
  });
});
