/** @jsx h */
/** @jsxFrag Fragment */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { useState } from "preact/compat";
import { Button } from "../Button";
import { Title } from "../Title";
import * as S from "./styles";

const AnimatedTitleExample = props => {
  const [animate, setAnimate] = useState(false);

  return (
    <S.TitleStyled>
      <Title animate={animate}>University Technology Office</Title>
      <Button
        onClick={e => {
          setAnimate(oldAnimate => !oldAnimate);
        }}
      >
        Animate
      </Button>
    </S.TitleStyled>
  );
};

export { AnimatedTitleExample };
