/* eslint-disable react/prop-types */
import { useState } from "preact/compat";
import PropTypes from "prop-types";

import * as S from "./styles";

const FoldableCard = ({ head, children, id, ...props }) => {
  // Mobile menu open state and helper functions
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(oldOpen => !oldOpen);

  return (
    <S.FoldableCard class={props.class}>
      <S.FoldableCardHeader
        show={open}
        id={id}
        onClick={() => {
          toggle();
        }}
      >
        {head}
      </S.FoldableCardHeader>
      <S.FoldableCardBody show={open} id={id}>
        {children}
      </S.FoldableCardBody>
    </S.FoldableCard>
  );
};

FoldableCard.propTypes = {
  head: PropTypes.node,
  children: PropTypes.node,
  class: PropTypes.string,
  id: PropTypes.string, // An ID to use for the card body ID and aria-controls
};

FoldableCard.defaultProps = {};

export { FoldableCard };
