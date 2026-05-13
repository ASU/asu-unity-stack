import { useChannel } from "storybook/preview-api";
import { useEffect } from "react";
import { EVENTS, PARAM_KEY } from "./constants";

export const withDataLayerListener = (storyFn, context) => {
  const emit = useChannel({});

  function removeDOMObjects(eventObject){
    return Object.entries(eventObject).reduce((acc, [k, v])=>{
      acc[k] = (typeof v === "object" && v.tagName) ? v.tagName : v;
      return acc
  },{})
  }

  function newPush() {
    for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {
      this[n] = arguments[i];
      emit(EVENTS.ADD_EVENT, {
        event: removeDOMObjects(arguments[i]),
      });
    }
    return n;
  }

  const listenToDataLayer = () => {
    window.dataLayer = window.dataLayer || [];
    Object.defineProperty(window.dataLayer, "push", {
      value: newPush,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  useEffect(()=>{
    setTimeout(listenToDataLayer, 1000);
  }, [])

  return storyFn(context);
};
