import "./eventSpy.js";
import "@asu/unity-bootstrap-theme/src/scss/unity-bootstrap-theme.bundle.scss";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
globalThis.bootstrap = bootstrap;

import "@asu/unity-bootstrap-theme/src/js/unity-bootstrap.js";
import { globalDecorators } from "./decorators.tsx";
import { Container } from "./docPage.tsx";

const parameters = {
  controls: { expanded: true },
  argTypes: {
    children: {
      control: false,
    },
  },
  backgrounds: {
    values: [
      {
        name: "Gray 2",
        value: "#e8e8e8",
      },
      {
        name: "Gray 3",
        value: "#d0d0d0",
      },
    ],
  },
  docs: {
    // Table of contents stopped working, so I disabled it.
    // If we can figure out how to get it working again, we can re-enable it.
    // If we decide we don't want it, we can remove it.
    //
    // toc: {
    //   contentsSelector: '.sbdocs-content',
    //   headingSelector: 'h1, h2, h3',
    //   title: 'Table of Contents',
    //   disable: false,
    //   ignoreSelector: '#primary',
    //   unsafeTocbotOptions: {
    //     orderedList: false,
    //   },
    // },
    controls: {
      sort: "requiredFirst",
    },
    container: Container,
  },
};


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
  decorators: globalDecorators,
  globalTypes: {
    framework: {
      name: 'Framework',
      description: 'Framework to use',
      defaultValue: 'bootstrap',
      toolbar: {
        title: 'Framework',
        icon: 'cog',
        items: [
          { value: 'react', icon: 'beaker', title: 'React Framework' },
          { value: 'bootstrap', icon: 'markup', title: 'Bootstrap Framework' },
        ],
        dynamicTitle: true,
      },
      initialGlobals: {
        framework: 'bootstrap',
      },
    },
  },
  tags: ['autodocs', 'react' , 'bootstrap'],
};

export default preview;
