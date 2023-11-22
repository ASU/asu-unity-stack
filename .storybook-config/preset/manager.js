import { addons, types } from '@storybook/addons';
import { Toggle } from '../Toggle';
import React from 'react';
import udsTheme from '../theme.js';

addons.register('uds', () => {
  addons.add('uds/column-guide', {
    title: 'Column Guide',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
        <Toggle global="columns">Column Guide</Toggle>
    )
  });
});

addons.setConfig({
  theme: udsTheme,
});
