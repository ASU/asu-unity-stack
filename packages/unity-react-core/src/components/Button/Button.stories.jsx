/* eslint react/jsx-props-no-spreading: "off", no-alert: "off" */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `The Button component can be used to generate UDS-compliant \`<button>\` DOM elements and Button-styled \`<a>\` links. It supports both legacy button styles and new UDS button variants.

## New UDS Button Variants

The Button component now supports three modern variants via the \`variant\` prop:
- **Borderless**: Text-only button that fills with color on hover
- **Outline**: Button with border and transparent background that fills on hover
- **Filled**: Solid background button (default when variant is used)

When using the \`variant\` prop, the button size options are: \`large\` (default), \`medium\`, \`small\`.


## Usage

By default, the Button component will output \`<button>\` or \`<a>\` tags, based on whether a URL string is provided via the \`href\` prop or an event handler function is provided via the \`onClick\` prop. The \`href\` prop will cause the Button component to render as a button-styled \`<a>\` link. Without the \`href\` prop, the Button will render as a \`<button>\`.

To use the React Router Link in the Button component, pass an instance of \`<Link>\` to the \`element\` prop and any additional props required by Link, e.g. \`to\` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.

View component examples and source code below.
        `,
      },
    },
  },
};

const handleClick = () => {
  alert("The button was clicked.");
};

const Template = args => {
  return (
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>
  );
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Default Button",
  onClick: handleClick,
};
DefaultButton.parameters = {
  docs: {
    source: {
      code: `const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  onClick: handleClick,
/>Default Button</Button>`,
    },
  },
};

export const SmallGoldButton = Template.bind({});
SmallGoldButton.args = {
  color: "gold",
  label: "Small Gold Button",
  onClick: handleClick,
  size: "small",
};
SmallGoldButton.parameters = {
  docs: {
    description: {
      story: `When the Button component is provided with an onClick handler function, the Button is rendered as a \`<button type="button">\`.

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color="gold"
      onClick: handleClick,
      size: "small",
    />Small Gold Button</Button>`,
    },
    source: {
      code: `const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
};

<Button
  color="gold"
  onClick: handleClick,
  size: "small",
/>Small Gold Button</Button>`,
    },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  color: "gold",
  icon: ["fas", "rocket"],
  label: "Icon Button",
  onClick: handleClick,
};
IconButton.parameters = {
  docs: {
    description: {
      story: `To include a Font Awesome icon in the button label, import the desired React icon and pass it to the Button component via the \`icon\` prop.:

    const handleClick = e => {
      e.preventDefault();
      alert("The button was clicked.");
    };

    <Button
      color="gold"
      icon: ["fas", "rocket"],
      onClick: handleClick,
    >Icon Button</Button>`,
    },
    source: {
      code: `
      const handleClick = e => {
        e.preventDefault();
        alert("The button was clicked.");
      };

      <Button
        color="gold"
        icon: ["fas", "rocket"],
        onClick: handleClick,
      >Icon Button</Button>`,
    },
  },
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  color: "maroon",
  href: "/#example-link",
  label: "Link Button",
};
LinkButton.parameters = {
  docs: {
    description: {
      story: `To render a button-style link, \`<a>\`-tag, use the \`href\` prop to set the destination url for this link. When a button is primarily intended for page navigation, this is the recommended solution for accessibility.

    <Button
      color="maroon"
      href="/#example-link"
    />Link Button</Button>`,
    },
    source: {
      code: `<Button
  color="maroon"
  href="/#example-link"
/>Link Button</Button>`,
    },
  },
};

export const TargetBlankButton = Template.bind({});
TargetBlankButton.args = {
  color: "maroon",
  href: "/#example-link",
  label: "Link Button",
  target: "_blank",
};

const ReactRouterTemplate = args => (
  <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args} />
      </div>
    </div>
  </Router>
);

export const ReactRouterLinkButton = ReactRouterTemplate.bind({});
ReactRouterLinkButton.args = {
  color: "gold",
  element: Link,
  label: "React Router Link",
  to: "/#example-link",
};
ReactRouterLinkButton.parameters = {
  docs: {
    description: {
      story: `To use the React Router Link in the Button component, pass an instance of \`<Link>\` to the \`element\` prop and any additional props required by Link, e.g. the \`to\` prop required for the destination URL. The rendered link will leverage all features of React Router, and be visually styled for UDS.

    import { BrowserRouter as Router, Link } from "react-router-dom";

    <Router>
      <...>
        <Button
          color="gold"
          element={Link}
          to="/#example-link"
          label="React Router Link"
        />
      </...>
    </Router>`,
    },
    source: {
      code: `import { BrowserRouter as Router, Link } from "react-router-dom";

<Router>
  <...>
    <Button
      color="gold"
      element={Link}
      to="/#example-link"
      label="React Router Link"
    />
  </...>
</Router>`,
    },
  },
};

// New UDS Button Variant Stories
export const FilledButton = Template.bind({});
FilledButton.args = {
  label: "Filled Button",
  variant: "filled",
  color: "gold",
  onClick: handleClick,
};
FilledButton.parameters = {
  docs: {
    description: {
      story: `The filled variant provides a solid background button. This is the default style when using the variant prop.`,
    },
  },
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  label: "Outline Button",
  variant: "outline",
  color: "maroon",
  onClick: handleClick,
};
OutlineButton.parameters = {
  docs: {
    description: {
      story: `The outline variant provides a button with border and transparent background that fills on hover.`,
    },
  },
};

export const BorderlessButton = Template.bind({});
BorderlessButton.args = {
  label: "Borderless Button",
  variant: "borderless",
  color: "gold",
  onClick: handleClick,
};
BorderlessButton.parameters = {
  docs: {
    description: {
      story: `The borderless variant provides a text-only button that fills with color on hover.`,
    },
  },
};

export const AllVariants = () => (
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <h3>UDS Button Variants</h3>
        <Button
          label="Borderless"
          variant="borderless"
          color="gold"
          onClick={handleClick}
        />
        <Button
          label="Outline"
          variant="outline"
          color="gold"
          onClick={handleClick}
        />
        <Button
          label="Filled sm"
          variant="filled"
          color="gold"
          onClick={handleClick}
          size="small"
        />
        <Button
          label="Filled md"
          variant="filled"
          color="gold"
          onClick={handleClick}
          size="medium"
        />
        <Button
          label="Filled lg/default"
          variant="filled"
          color="gold"
          onClick={handleClick}
          size="large"
        />
      <h3>All Colors</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button label="Gold" variant="filled" color="gold" onClick={handleClick} />
        <Button label="Maroon" variant="filled" color="maroon" onClick={handleClick} />
        <Button label="Gray" variant="filled" color="gray" onClick={handleClick} />
        <Button label="Dark" variant="filled" color="dark" onClick={handleClick} />
      </div>
    </div>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: `Showcase of all button variants and colors available.`,
    },
  },
  controls: { disable: true },
};

