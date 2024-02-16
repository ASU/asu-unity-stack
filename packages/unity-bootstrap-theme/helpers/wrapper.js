import React, { useEffect, useRef } from "react";

import { template } from "./templates";

export const createStory = (
  componentJSX,
  {
    initFunc = ()=>{},
    omitTemplate = false,
  } = {}
) => {
  const Template = ({ ...args }) => {

      // call init function after render every time
      const loaded = useRef(0);
      useEffect(()=>{
        initFunc();
      },[loaded.current]);
      loaded.current++;

      const codeWithArgs =
        typeof componentJSX === "function" ? componentJSX(args) : componentJSX;

      const componentCode = omitTemplate
        ? <div id="html-root">{ codeWithArgs }</div>
        : template(codeWithArgs, args.template);

      return (<>{componentCode}</>);
  };
  return Template.bind({});
};
