import React from 'react';
import { addons, types, useAddonState, useStorybookApi, useParameter, useChannel, useGlobals } from '@storybook/manager-api';
import { formatCode } from "./renderToHTML";
import { AddonPanel } from '@storybook/components';
import { Heading, Source } from '@storybook/blocks';

const ADDON_ID = 'HTML';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: `${ADDON_ID}`,
    render: ({ active }) => {
      const [{ code }, setState] = useAddonState(ADDON_ID, {
        code: null,
      });

      useChannel({
        "HTML/CodeUpdated": ({ code }) =>
          setState((state) => ({ ...state, code })),
      });
      const globals = api.getGlobals();
      const frameworkValue = globals.framework || "";
      const globalTypes = api.getGlobalTypes();
      const frameworkTitle = globalTypes.framework?.toolbar?.items?.find(({value})=>value===frameworkValue)?.title || "";
      return (
      <AddonPanel active={active}>
        {frameworkTitle && <Heading>HTML with {frameworkTitle}</Heading>}
        <Source dark={true} code={formatCode(code)} />
      </AddonPanel>
    )},
  });
});
