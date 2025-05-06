import "./eventSpy.js";
import "../src/scss/unity-bootstrap-theme.bundle.scss";
import { default as bootstrap } from "bootstrap/js/index.umd.js";
globalThis.bootstrap = bootstrap;
import { default as udsBootstrap } from "../src/js/unity-bootstrap.js";
globalThis.udsBootstrap = udsBootstrap;

import { removeFontAwesomeChanges } from "./local-addon/helpers";

import { windowLoadEvent } from "./decorators.jsx";

const parameters = {
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
    transform: (code) => removeFontAwesomeChanges(code)
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
    decorators: [windowLoadEvent],
};

export default preview;
