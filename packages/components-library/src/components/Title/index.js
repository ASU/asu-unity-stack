/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

const Title = forwardRef(({children, ...props}, ref) => {
  return <S.Title ref={ref} {...props}>{children}</S.Title>;
});

Title.propTypes = {
  baseUrl: PropTypes.string,
  parentOrg: PropTypes.string,
  parentOrgUrl: PropTypes.string,
};

Title.defaultProps = {
  baseUrl: "/",
  parentOrgUrl: "/"
};

export { Title };
