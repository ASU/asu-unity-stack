import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { GlobalElementsOnly as Footer } from "../../../stories/organisms/global-footer/global-footer.templates";

export const withFooter = makeDecorator({
  name: 'withFooter',
  parameterName: 'footer',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    const { globals, parameters } = context;
    const footer = parameters?.footer;
    const isFooterActive = (globals.footer == true && footer?.disable !== true) || footer.forced == true;
    const isStory = context.viewMode === 'story';

    return <>
      {storyFn(context)}
      {isStory && isFooterActive && <Footer /> }
    </>
  }
});
