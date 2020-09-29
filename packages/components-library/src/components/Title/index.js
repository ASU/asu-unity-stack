/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import * as S from "./styles";
import { forwardRef, useEffect, useState } from "preact/compat";
import PropTypes from "prop-types";

/**
 * Title component
 */
const Title = forwardRef(({children, root, ...props}, ref) => {

  // state to control animating the title upon first site page load
  const [active, setActive] = useState(false);

  /**
   * Upon mounting, check if this is the first page loaded by the user for this site. If it is
   * the first page load, then we set the 'active' state to animate the header with gold highlight.
   */
  useEffect(() => {

    const siteRoot = root ? root : window.location.hostname;

    const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('title_loaded'));

    // If the referrer URL does not contain the current site root, then this page
    // was either loaded after linking from another site, or navigated to directly.
    // Note: This logic will not work if displaying the
    // component inside of an iframe, such as in Storybook
    if (!document.referrer.includes(siteRoot) && !cookieValue) {
      setActive(true);

      // set 'title_loaded' cookie so that if the inital page load is reloaded, avoids
      // animating the title a 2nd time.
      document.cookie = "title_loaded=true;max-age=60*10";
    }

  }, []);

  return <S.Title ref={ref} {...props} class={active ? "active" : ""}>{children}</S.Title>;
});

Title.propTypes = {
  baseUrl: PropTypes.string,
  parentOrg: PropTypes.string,
  parentOrgUrl: PropTypes.string,
  root: PropTypes.string // Override the site root for checking first page load. Hostname is used by default.
};

Title.defaultProps = {
  baseUrl: "/",
  parentOrgUrl: "/"
};

export { Title };
