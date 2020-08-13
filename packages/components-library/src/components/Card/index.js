/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { useState,} from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";

const FoldableCard = ({ head, children, ...props }) => {
  // Mobile menu open state and helper functions
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(oldOpen => !oldOpen);

  return (
    <S.FoldableCard class={props.class}>
      <S.FoldableCardHeader
        show={open}
        onClick={e => {
          toggle();
        }}
        onKeyDown={e => {
          if (e.which == 13) {
            toggle();
          }

        }}
      >
        {head}
      </S.FoldableCardHeader>
      <S.FoldableCardBody show={open}>{children}</S.FoldableCardBody>
    </S.FoldableCard>
  );
};

FoldableCard.propTypes = {
  head: PropTypes.node,
  children: PropTypes.node,
  class: PropTypes.string
};

FoldableCard.defaultProps = {};

export { FoldableCard };
