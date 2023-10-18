import React, { useEffect, useRef} from 'react';
import { makeDecorator } from '@storybook/addons';
import prettier from "prettier";
import HTMLParser from 'prettier/parser-html'

import "../../src/js/data-layer.js";

const withLoadEvent = makeDecorator({
  name: 'withLoadEvent',
  parameterName: 'loadEvent',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    const loaded = useRef(0);
    useEffect(()=>{
      if(document.readyState !== "loading") {
        // globalThis = window
        globalThis.dispatchEvent(new Event("DOMContentLoaded"));
        globalThis.dispatchEvent(new Event('load'));
      }
      if(typeof globalThis.googleAnalytics === "function") { globalThis.googleAnalytics(); }

    },[loaded.current]);
    loaded.current++;
    return <>
      {storyFn(context)}
    </>
  }
});

const withInitFunc = makeDecorator({
  name: 'withInitFunc',
  parameterName: 'initFunc',
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context) => {
    React.useEffect(()=>{
      const initFunc = context?.parameters?.initFunc?.code;
      if (typeof initFunc === "function") {
        initFunc()
      }
    })
    return storyFn(context);
  }
});

export const parameters = {
  initFunc: {
    disable: true
  },
  loadEvent: {
    disable: false
  },
  docs:{
    transformSource: (src,storyContext)=>{
      return prettier.format(`${(document?.getElementById(`story--${storyContext.id}`)?.innerHTML || "")}`,
      {
        parser: 'html',
        plugins: [HTMLParser],
      });
    },
    source: {
      type:"auto"
    }
  }
}

export const decorators = [
  withInitFunc,
  withLoadEvent,
]
