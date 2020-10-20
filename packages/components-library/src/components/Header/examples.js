/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState } from "preact/compat";
import { Header } from "./";
import { Button } from "../Button";
import { BasicNavTree } from "../Nav/NavTreeExample";

const AnimatedHeaderTitleExample = props => {
  const [animate, setAnimate] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header
        animateTitle={animate}
        navTree={BasicNavTree}
        title="University Technology Office"
      />
      <Button
        onClick={e => {
          setAnimate(oldAnimate => !oldAnimate);
        }}
        style={{ marginTop: "300px" }}
      >
        Animate
      </Button>
    </div>
  );
};

export { AnimatedHeaderTitleExample };
