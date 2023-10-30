import { useEffect, useRef} from 'react';

import { makeDecorator } from '@storybook/addons';
// import { action } from '@storybook/addon-actions';

import "../../../src/js/data-layer.js";

export const withLoadEvent = makeDecorator({
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
        // console.log("ForcedLoadEvent")
      }else{
        // console.log("unForcedLoadEvent")
      }
      // console.log(globalThis.dataLayer)
      if(typeof globalThis.initDataLayer === "function") {
        globalThis.initDataLayer();
      }
    },[loaded.current]);
    loaded.current++;
    return storyFn(context)
  }
});
