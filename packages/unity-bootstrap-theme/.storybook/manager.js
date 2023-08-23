import React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';
import { useStorybookApi, useStorybookState } from '@storybook/api';



addons.register('my/panel', (api) => {
  addons.add('my-panel-addon/panel', {
    title: 'Javscript',
    //👇 Sets the type of UI element in Storybook
    type: types.PANEL,
    render: ({active}) => {
      const api = useStorybookApi();
      const data = api.getCurrentStoryData();
      const { storyId } = useStorybookState();
      const [code, setCode] = React.useState("")

      React.useEffect(()=>{
        setCode(`${data?.args?.initFunc}`);
      },[data?.args?.initFunc, storyId]);

      if(typeof code === "undefined" || code === "undefined") return null

      return(
      <AddonPanel key="panel" active={active}>
        <textarea style={{
          padding: "1.5rem",
          width: "100%",
          height: "100%",
          lineHeight: "1.5rem",
          fontFamily: "monospace",
          resize: "none"
          }}
          readOnly="readonly"
          value={code}
        />
      </AddonPanel>
    )},
  });
});
