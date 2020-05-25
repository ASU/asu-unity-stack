import { h } from 'preact';
import Button from ".";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: Button,
  title: "Button",
  decorators: [withA11y],
};

export const base = () => <Button>Base button</Button>;

export const gold = () => <Button gold medium>Gold button</Button>;
export const maroon = () => <Button maroon medium>Gold button</Button>;
export const light = () => <Button light medium>Light button</Button>;
export const dark = () => <Button dark medium>Dark button</Button>;

export const small = () => <Button gold small>Gold button</Button>;
export const medium = () => <Button gold medium>Gold button</Button>;
export const large = () => <Button gold large>Gold button</Button>;

export const withIcon = () => <Button gold medium><span role="img" aria-label="so cool">😀  Icon button</span></Button>;
export const disabled = () => <Button gold medium disabled>Gold Disabled button</Button>;
export const hover = () => <Button gold medium hover>Gold Hover button</Button>;
