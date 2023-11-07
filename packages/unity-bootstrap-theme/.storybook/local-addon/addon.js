import React from 'react';
import { AddonPanel, Source } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { Toggle } from '../../../../.storybook-config/Toggle'

addons.register('local-addon', (api) => {

  addons.add('local-addon/tools', {
    title: 'tools',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
      <>
        <Toggle global="header">Header</Toggle>
        <Toggle global="footer">Footer</Toggle>
      </>
    )
  });
});

