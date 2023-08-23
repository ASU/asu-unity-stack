import { useEffect, useRef } from "react";

export const createComponent = (
  name,
  section = "Atoms",
  type = "",
  extraOptions = {}
) => {

  const result = {
    title: [section,name,type].filter(x=>x).join("/"),
    argTypes: {
      initFunc: {
        table: {disable: true}
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

/*
TODO: Use this const in place of pattern
  Story.parameters = {
    uds: {
      template: {
        include: [1,3]
      }
    }
  };
*/
export const layoutNames = {
  OMIT_TEMPLATE: "x",
  FULL_WIDTH: 0,
  ONE_COLUMN: 1,
  TWO_COLUMN: 2,
  CONTENT: 3,
  SIDEBAR: 4,
};

export const createStory = (
  componentJSX,
  {
    initFunc,
  } = {}
) => {

  const Template = (args) => {
      // call init function after render every time
      const loaded = useRef(0);
      useEffect(()=>{
        if(typeof initFunc === "function") {
          initFunc();
        }
      },[loaded.current]);
      loaded.current++;

      return typeof componentJSX === "function" ? componentJSX(args) : componentJSX;

  }

  const _story =  {
    render: Template,
    _args: {
      initFunc: typeof initFunc !== "undefined" ? `${initFunc}` : undefined,
    },
    /*
      ensure Story.args = {} does not overwrite initFunc
    */
    set args(args) {this._args = {...this._args, ...args}},
    get args() {return this._args;},
    _argTypes: {
      initFunc: {
        table: {disable: false}
      },
    },
    set argTypes(argTypes) {this._argTypes = {...this._argTypes, ...argTypes}},
    get argTypes() {return this._argTypes;},
  }
  return _story;
};
