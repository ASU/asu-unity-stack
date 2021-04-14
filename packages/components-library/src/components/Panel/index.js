/* eslint-disable react/prop-types */

import PropTypes from "prop-types";

import * as S from "./styles";

const Panel = props => {
  return <S.Panel class={props.class}>{props.children}</S.Panel>;
};

Panel.propTypes = {
  class: PropTypes.string,
};

Panel.defaultProps = {};

export { Panel };
