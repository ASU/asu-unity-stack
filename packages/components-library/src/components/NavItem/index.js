/* eslint-disable react/prop-types */
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

import { trackGAEvent } from "../../services/googleAnalytics";
import { Heading } from "../Heading";
import * as S from "./styles";

/**
 * Render a single Nav Item. This could be either a 'button' link, 'icon' link
 * @param {} props
 */
const NavItem = forwardRef(
  ({ onFocus, type, children, href, ...props }, ref) => {
    switch (type) {
      case "button":
        // standards only allow dark buttons in nav dropdowns
        return (
          <S.NavButton
            {...props}
            ref={ref}
            href={href}
            {...(onFocus ? { onFocus } : "")}
            medium
            dark
          >
            {children}
          </S.NavButton>
        );

      case "icon":
        return (
          <S.NavIcon
            {...props}
            href={href}
            {...(onFocus ? { onFocus } : "")}
            ref={ref}
            type={props.class}
            alt={`${children} icon`}
          >
            {children}
          </S.NavIcon>
        );

      case "icon-home":
        return (
          <S.NavIcon
            {...props}
            href={href}
            onFocus={() => trackGAEvent("home button")}
            ref={ref}
            type="home"
            alt={`${children} icon`}
          >
            {children}
          </S.NavIcon>
        );
      case "heading":
        return <Heading type="h3">{children}</Heading>;
      default:
        return (
          <S.NavLink
            href={href}
            {...(onFocus ? { onFocus } : "")}
            ref={ref}
            {...props}
          >
            {children}
          </S.NavLink>
        );
    }
  }
);

NavItem.propTypes = {
  location: PropTypes.array, // Array representation of the item's location in the Nav
  onFocus: PropTypes.func,
  type: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string.isRequired, // children always required (accessiblity and mobile)
  icon: PropTypes.string,
  selected: PropTypes.bool,
};

NavItem.defaultProps = {
  selected: false,
};

export default NavItem;
