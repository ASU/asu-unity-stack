


import { action } from "@storybook/addon-actions";

import { Button } from ".";

export default {
  component: Button,
  title: "Button",
};
/*
export const base = () => (
  <Button onclick={action("clicked")}>Base button</Button>
);*/

export const gold = () => (
  <Button gold medium onclick={action("clicked")}>
    Gold button
  </Button>
);
export const maroon = () => (
  <Button maroon medium onclick={action("clicked")}>
    Maroon button
  </Button>
);
export const light = () => (
  <Button light medium onclick={action("clicked")}>
    Light button
  </Button>
);
export const dark = () => (
  <Button dark medium onclick={action("clicked")}>
    Dark button
  </Button>
);

export const small = () => (
  <Button gold small>
    Gold button
  </Button>
);
export const medium = () => (
  <Button gold medium>
    Gold button
  </Button>
);
export const large = () => (
  <Button gold large>
    Gold button
  </Button>
);

export const withIcon = () => (
  <Button gold medium>
    <span role="img" aria-label="so cool">
      😀 Icon button
    </span>
  </Button>
);
export const disabled = () => (
  <Button gold medium disabled>
    Gold Disabled button
  </Button>
);
export const hover = () => (
  <Button gold medium hover>
    Gold Hover button
  </Button>
);

export const link = () => (
  <Button gold medium href="https://asu.edu">
    Gold Link button
  </Button>
);
