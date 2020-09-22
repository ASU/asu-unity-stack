/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

const Logo = forwardRef((props, ref) => {
  return <S.Logo ref={ref} {...props} />;
});

Logo.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  mobileSrc: PropTypes.string,
  brandLink: PropTypes.string,
};

Logo.defaultProps = {
  alt: "Arizona State University",
  src: "https://i.imgur.com/5WtkgkV.png",
  mobileSrc:
    "https://www.asu.edu/asuthemes/4.10/assets/arizona-state-university-logo.png",
  brandLink: "https://asu.edu",
};

export { Logo };
