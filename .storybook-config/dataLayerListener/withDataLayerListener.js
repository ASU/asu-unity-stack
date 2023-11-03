import { makeDecorator, useChannel, useEffect } from "@storybook/addons";
import { EVENTS, PARAM_KEY } from "./constants";

export const withDataLayerListener = makeDecorator({
  name: "withDataLayerListener",
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context ) => {
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
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
