import React from 'react';
import { makeDecorator } from '@storybook/addons';

import { Basic as Header } from "../../../stories/organisms/global-header/global-header.templates.jsx";

export const withHeader = makeDecorator({
  name: 'withHeader',
  parameterName: 'header',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    const { globals, parameters } = context;
    const header = parameters?.header;
    const isHeaderActive = (globals.header == true && header?.disable !== true) || header.forced === true;
    const isStory = context.viewMode === 'story';

    return <>
      {isStory && isHeaderActive && <Header />}
      {storyFn(context)}
    </>
  }
});
