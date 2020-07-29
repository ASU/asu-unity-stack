/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const FoldableCard = ({ head, children }) => {
  // Mobile menu open state and helper functions
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(oldOpen => !oldOpen);

  return (
    <S.FoldableCard>
      <S.FoldableCardHeader
        show={open}
        onClick={e => {
          toggle();
        }}
      >
        {head}
      </S.FoldableCardHeader>
      <S.CardBody show={open}>{children}</S.CardBody>
    </S.FoldableCard>
  );
};

FoldableCard.propTypes = {
  head: PropTypes.node,
  children: PropTypes.node,
};

FoldableCard.defaultProps = {};

export { FoldableCard };
