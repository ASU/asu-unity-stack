import React, {useRef, useEffect} from "react";
import "../src/scss/unity-bootstrap-theme.bundle.scss";

// Import all the Bootstrap bundle
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../src/js/data-layer.js";

const loadEvent = (Story)=>{
  const loaded = useRef(0);
  useEffect(()=>{
    console.log(document.readyState)
    if(document.readyState !== "loading") {
      // globalThis = window
      globalThis.dispatchEvent(new Event("DOMContentLoaded"));
      globalThis.dispatchEvent(new Event('load'));
    }
    if(typeof globalThis.googleAnalytics === "function") { globalThis.googleAnalytics(); }

  },[loaded.current]);
  loaded.current++;
  return <>
    {Story()}
  </>
}

export const parameters = {
  options: {
    storySort: {
      order: [
        'Get Started',
        'Design', ['Readme', '*'],
        [
          'Colors', ['Readme', '*'],
          'Typography', ['Readme', '*'],
          'Layout', ['Readme', '*'],
          'Icons', ['Readme', '*'],
          'Backgrounds', ['Readme', '*'],
          'Focus States', ['Readme', '*'],
        ],
        'Atoms', ['Readme', '*'],
        'Molecules', ['Readme', '*'],
        'Organisms', ['Readme', '*'],
        [
          'Global Header', ['Readme', '*'],
          [
            'Header top', ['Readme', '*'],
            'Header main', ['Readme', '*'],
            'Navbar options', ['Readme', '*'],
            'No navigation', ['Readme', '*'],
            'Additional considerations', ['Readme', '*'],
            'Mobile Breakpoint', ['Readme', '*'],
          ],
          'Content Sections', ['Readme', '*'],
          'Hero', ['Readme', '*'],
        ],
      ],
    },
  },
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
      htmlWhitespaceSensitivity: "ignore",
    },
    root: "#html-root", // can be customized to wrap an element
    removeComments: /^\s*\s*$/,
    transform: (code) => {
      // remove Fontawesome transforming span into svg
      code = code.replace(/<svg.*?<\/svg>/gi, "");
      code = code.replace(/(<!--\s)(<span.*?class=.*?fa-.*?><\/span>)(\s-->)/gi, "$2");
      code = code.replace(/(<!--\s)(<i.*?class=.*?fa-.*?><\/i>)(\s-->)/gi, "$2");
      return code;
    }
  },
};
export const decorators = [ loadEvent ];
