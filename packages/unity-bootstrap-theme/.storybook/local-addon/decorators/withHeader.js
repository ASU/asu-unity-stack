import React, { useEffect, useRef} from 'react';
import { makeDecorator } from '@storybook/addons';

import { Basic as Header } from "../../../stories/organisms/global-header/global-header.templates";

import { initGlobalHeader } from "../../../src/js/storybook-global-header";

export const withHeader = makeDecorator({
  name: 'withHeader',
  parameterName: 'header',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    const loaded = useRef(0);
    useEffect(()=>{
      if(document.readyState !== "loading") {
        initGlobalHeader()
      }
    },[loaded.current]);
    loaded.current++;

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
