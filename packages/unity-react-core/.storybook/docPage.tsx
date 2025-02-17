import {
  Canvas,
  Controls,
  Description,
  DocsContainer,
  Heading,
  Subtitle,
  Source,
  Title,
} from '@storybook/blocks';

import { Badge } from '@storybook/components';
import renderToHTML from './renderToHTML.jsx'
import React from 'react';

import * as unityReactCore from '../src/index.js';

export const Container = ({ _, context, ...props }) => {
  const {
    primaryStory,
    store,
    attachedCSFFiles,
  } = context;
  const cID = primaryStory.componentId;
  const tags = store.storyIndex.entries[`${cID}--docs`].tags || [];
  const component = [...attachedCSFFiles][0].meta.component;
  // __docgenInfo is present when compiled with build-storybook
  // displayName is used with typescript files .tsx
  // name is used with javascript files .jsx
  const componentName =
  component?.__docgenInfo?.displayName ||
  component?.__docgenInfo?.name ||
  component?.displayName ||
  component?.name;

  // React component is exported
  const exportedTrue = typeof unityReactCore[componentName] !== "undefined";
  const isReactExampleVisible = exportedTrue && tags.includes("react");

  // Works with Bootstrap
  const isBootstrapExampleVisible = tags.includes("bootstrap");
  return <DocsContainer context={context} {...props}>
      <Title />
      {
        isBootstrapExampleVisible &&
          <div><Badge status="neutral">Bootstrap HTML Example</Badge></div>
      }
      {
        exportedTrue &&
          <div><Badge status="neutral">Available with Unity React Core</Badge></div>
      }
      <Subtitle />
      <Description />

      <Canvas layout="padded" sourceState="none" withToolbar={true}/>
      <Heading>Props</Heading>
      <Controls sort="requiredFirst" />

      <Heading>Bootstrap HTML</Heading>
      {
        isBootstrapExampleVisible ?
        <Source dark={true} transform={renderToHTML} /> :
        <div>Not supported</div>
      }
      <Heading>Unity React Core</Heading>
      {
        isReactExampleVisible ?
        <Source dark={true} /> :
        <div>Not exported</div>
      }
    </DocsContainer>;
};
