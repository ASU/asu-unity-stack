import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Anchor Menu",
    decorators: [ defaultDecorator ],
    parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component: `This example has moved to unity-react-core.

React components and HTML templates are now located in a shared space to ensure consistency between the React and Bootstrap usages.
        `,
      },
    },
  }
};


export const AnchorMenu = {
  render: () => <p>
    Follow the link to view the{" "}
    <a
      href="../../@asu/unity-react-core/index.html?path=/story/components-anchormenu--default"
      target="_parent"
    >
      anchor menu
    </a>{" "}
    example in @asu/unity-react-core.
  </p>
};
