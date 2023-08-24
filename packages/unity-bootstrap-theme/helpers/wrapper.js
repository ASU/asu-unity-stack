import React, { useEffect, useRef } from "react";
import { GlobalElementsOnly as Footer } from "../stories/organisms/global-footer/global-footer.templates.stories.js";
import { Basic as Header } from "../stories/organisms/global-header/global-header.templates.stories.js";
import { template } from "./templates";

export const createComponent = (
  name,
  section = "Atoms",
  type = "",
  extraOptions = {}
) => {

  const result = {
    title: [section,name,type].filter(x=>x).join("/"),
    argTypes: {
      header: {
        name: "Show Header",
        control: { type: "boolean" },
        defaultValue: false,
      },
      footer: {
        name: "Show Footer",
        control: { type: "boolean" },
        defaultValue: false,
      },
      template: {
        name: "Template",
        options: [0, 1, 2, 3, 4],
        defaultValue: 1,
        control: {
          type: "radio",
          labels: {
            0: "Full Width",
            1: "1 Column (Fixed Width)",
            2: "2 Column (Fixed Width)",
            3: "3 Column (Fixed Width)",
            4: "4 Column (Fixed Width)",
          },
        },
      },
      ...extraOptions,
    },
  };

  // removes default controls when extraOptions = { footer: null }
  result.argTypes = Object.entries(result.argTypes).reduce((acc,[key,obj])=>{
    if (obj?.control) {
      acc[key]=obj;
    }
    return acc;
  }, {});

  // warn if invalid extraOptions will cause problems
  /*
    example:
    size: {
      name: "Size",
      options: ["small", null],
      defaultValue: null,
      control: {
        type: "radio",
        labels: {
          "small": "Small",
          null: "Large",
        },
      },
    },
  */
  if (JSON.stringify(result.argTypes).indexOf('""') > -1) {
    console.warn(`${result.title} has invalid extraOptions object, replace "" with null`);
  }

  return result;
};

export const layoutNames = {
  FULL_WIDTH: 0,
  ONE_COLUMN: 1,
  TWO_COLUMN: 2,
  THREE_COLUMN: 3,
  FOUR_COLUMN: 4,
};

export const createStory = (
  componentJSX,
  {
    supportedTemplates = [
      layoutNames.FULL_WIDTH,
      layoutNames.ONE_COLUMN,
      layoutNames.TWO_COLUMN,
      layoutNames.THREE_COLUMN,
      layoutNames.FOUR_COLUMN,
    ],
    initFunc = ()=>{},
    omitTemplate = false,
  } = {}
) => {
  const Template = ({ ...args }) => {
    if (supportedTemplates.includes(args.template) || omitTemplate) {
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

      return (
        <div>
          {`${args.header}` === 'true' && Header}
          {componentCode}
          {`${args.footer}` === 'true' && Footer}
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2>This layout isn't supported for this element.</h2>
          <span>Use the storybook controls to choose a supported layout:</span>
          <ul>
            {supportedTemplates.includes(layoutNames.FULL_WIDTH) && (
              <li>Full-width</li>
            )}
            {supportedTemplates.includes(layoutNames.ONE_COLUMN) && (
              <li>One Column</li>
            )}
            {supportedTemplates.includes(layoutNames.TWO_COLUMN) && (
              <li>Two Column</li>
            )}
            {supportedTemplates.includes(layoutNames.THREE_COLUMN) && (
              <li>Three Column</li>
            )}
            {supportedTemplates.includes(layoutNames.FOUR_COLUMN) && (
              <li>Four Column</li>
            )}
          </ul>
        </div>
      );
    }
  };
  return Template.bind({});
};
