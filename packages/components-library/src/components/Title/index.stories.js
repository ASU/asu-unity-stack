


import { Title } from ".";
import { TitleStyled } from "./styles";
import { AnimatedTitleExample } from "./examples";

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
