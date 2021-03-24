/* eslint-disable react/prop-types */

import * as S from "./styles";
import PropTypes from "prop-types";

const Panel = props => {
  return <S.Panel class={props.class}>{props.children}</S.Panel>;
};

Panel.propTypes = {
  class: PropTypes.string,
};

Panel.defaultProps = {};

export { Panel };
