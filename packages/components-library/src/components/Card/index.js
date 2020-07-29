/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const FoldableCard = ({head, children}) => {
  // Mobile menu open state and helper functions
  const [open, setOpen] = useState(false);

  return (
    <S.FoldableCard>
      <S.CardHeader onMouseDown={(open) => {setOpen(!open)}}>{head}</S.CardHeader>
      <S.CardBody>{children}</S.CardBody>
    </S.FoldableCard>
  );
};

FoldableCard.propTypes = {
  head: PropTypes.node,
  children: PropTypes.node
};

FoldableCard.defaultProps = {
};

export { FoldableCard };
