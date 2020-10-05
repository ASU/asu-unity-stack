/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import { forwardRef, useEffect, useState } from "preact/compat";
import { checkFirstLoad } from "../../helpers";
import PropTypes from "prop-types";

/**
 * Title component
 */
const Title = forwardRef(({ children, ...props }, ref) => {
  // state to control animating the title upon first site page load
  const [active, setActive] = useState(false);
  const baseUrl = props.baseUrl;

  /**
   * Upon mounting, check if this is the first page loaded by the user for this site. If it is
   * the first page load, then we set the 'active' state to animate the header with gold highlight.
   */
  useEffect(() => {
    // If a custom baseUrl is passed in, it will be used to check for first page load
    let root = baseUrl == "/" ? window.location.hostname : baseUrl;

    // If relative baseURL given, append to the hostname for checking first page load
    if (!root.includes(window.location.hostname) && root.indexOf("/") === 0) {
      root = window.location.hostname + root;
    }

    if (checkFirstLoad({ root })) {
      setActive(true);
    }

  }, []);

  return (
    <S.Title ref={ref} {...props} class={active ? "active" : ""}>
      {children}
    </S.Title>
  );
});

Title.propTypes = {
  baseUrl: PropTypes.string,
  parentOrg: PropTypes.string,
  parentOrgUrl: PropTypes.string,
};

Title.defaultProps = {
  baseUrl: "/",
  parentOrgUrl: "/",
};

export { Title };
