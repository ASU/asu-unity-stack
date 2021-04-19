import { action } from "@storybook/addon-actions";
import { css } from "@emotion/css";
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

export const FocusButtonsAndLinks = () => {
  const testButtons = () => (
    <>
      <div> {link()} </div>
      <div> {maroon()} </div>
      <div> {light()} </div>
      <div> {dark()} </div>
      <div> {gold()} </div>
      <div> {small()} </div>
      <div> {medium()} </div>
      <div> {large()} </div>
      <div> {withIcon()} </div>
      <div> {disabled()} </div>
      <div> {hover()} </div>
      <div> {hover()} </div>
    </>
  );

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-evenly;
        .col {
          display: flex;
          align-items: center;
          flex-direction: column;
          border: 1px solid;
          padding: 10px;

          &.col-left {
            background-color: #191919 ;
          }

          &.col-center {
            background: linear-gradient(rgba(25, 25, 25, 0), rgba(25, 25, 25, 0.75));
          }

          &.col-right {
            background-color: #fffff ;
          }
          & div {
            padding-top: 10px;
          }
        }
      }`}
    >
      <div className="col col-left">{testButtons()}</div>
      <div className="col col-center">{testButtons()}</div>
      <div className="col col-right">{testButtons()}</div>
    </div>
  );
};
