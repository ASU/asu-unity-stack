import { addons, types } from '@storybook/addons';
import { JsPanel, TopToggles } from './Tools';

addons.register('local-addon', (api) => {
  addons.add('local-addon/panel', {
    title: 'Javascript',
    //👇 Sets the type of UI element in Storybook
    type: types.PANEL,
    paramKey: 'initFunc',
    render: (props)=>{
      const p = {...props, api};
      console.log(p)
      return JsPanel(p)
    },
  });

  addons.add('local-addon/tools', {
    title: 'tools',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: TopToggles
  });
});

