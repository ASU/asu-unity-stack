import React from 'react';
import { AddonPanel, Source } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { formatWithBabelParser } from './helpers';
import { Toggle } from '../../../../.storybook-config/Toggle'

addons.register('local-addon', (api) => {
  addons.add('local-addon/panel', {
    title: 'Javascript',
    //👇 Sets the type of UI element in Storybook
    type: types.PANEL,
    paramKey: 'initFunc',
    render: ({active, key}) => {
      const data = api.getCurrentStoryData();
      const initFunc = data?.parameters?.initFunc?.code || '';
      const code = formatWithBabelParser(`${initFunc}`);

      return(
        <AddonPanel key={key} active={active}>
          <Source code={`${code}`} language='js' format={true} />
        </AddonPanel>
    )},
  });

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

