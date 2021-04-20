


import { Title } from ".";

import { AnimatedTitleExample } from "./examples";
import { TitleStyled } from "./styles";

export default {
  component: Title,
  title: "Title",
};

export const base = () => (
  <TitleStyled>
    <Title>University Technology Office</Title>
  </TitleStyled>
);

export const parentOrg = () => (
  <TitleStyled>
    <Title parentOrg="Ira A. Fulton Schools of Engineering">
      School of Computing, Informatics, and Decisions Systems Engineering
    </Title>
  </TitleStyled>
);

export const animated = () => {
  return <AnimatedTitleExample />;
};
