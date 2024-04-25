import React from 'react';
import { AddonPanel } from '@storybook/components';
import { Source } from '@storybook/blocks';
import { formatWithBabelParser } from './helpers';
import { Toggle } from '../../../../.storybook-config/Toggle'

export function JsPanel(props) {
  const { active, key, api } = props;
  // const { api } = this;
  console.log(active, key, api)
  const data = api.getCurrentStoryData();
  const initFunc = data?.parameters?.initFunc?.code || '';
  const code = formatWithBabelParser(`${initFunc}`);

  return (
    <AddonPanel key={key} active={!!active}>
      <Source code={`${code}`} language='js' format={true} />
    </AddonPanel>
  )
};

export const TopToggles = () => (
  <>
    <Toggle global="header">Header</Toggle>
    <Toggle global="footer">Footer</Toggle>
  </>
);

