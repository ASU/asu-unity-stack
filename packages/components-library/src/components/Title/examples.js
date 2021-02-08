

import { useState } from "preact/compat";
import { Button } from "../Button";
import { Title } from "../Title";
import * as S from "./styles";

const AnimatedTitleExample = props => {
  const [animate, setAnimate] = useState(false);

  return (
    <S.TitleStyled {...props}>
      <Title animate={animate}>University Technology Office</Title>
      <Button
        onClick={() => {
          setAnimate(oldAnimate => !oldAnimate);
        }}
      >
        Animate
      </Button>
    </S.TitleStyled>
  );
};

export { AnimatedTitleExample };
