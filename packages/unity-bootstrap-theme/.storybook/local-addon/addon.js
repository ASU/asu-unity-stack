import React from 'react';
import { AddonPanel, Source } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import prettier from "prettier";
import Parser from 'prettier/parser-babel'

addons.register('local-addon', (api) => {
  addons.add('local-addon/panel', {
    title: 'Javascript',
    //👇 Sets the type of UI element in Storybook
    type: types.PANEL,
    paramKey: 'initFunc',
    render: ({active, key}) => {
      const data = api.getCurrentStoryData();
      const initFunc = data?.parameters?.initFunc?.code || '';
      const code = prettier.format(`${initFunc}` ,
      {
        parser: 'babel',
        plugins: [Parser],
      });

      return(
      <AddonPanel key={key} active={active}>
        <Source code={`${code}`} language='js' format={true} />
      </AddonPanel>
    )},
  });
});
