import React, { useEffect, useRef} from 'react';
import { makeDecorator } from '@storybook/addons';

import { GlobalElementsOnly as Footer } from "../../../stories/organisms/global-footer/global-footer.templates";
import { initFooterGA } from "../../../stories/organisms/global-footer/global-footer"

export const withFooter = makeDecorator({
  name: 'withFooter',
  parameterName: 'footer',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    const loaded = useRef(0);
    useEffect(()=>{
      if(document.readyState !== "loading") {
        initFooterGA()
      }
    },[loaded.current]);
    loaded.current++;

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
