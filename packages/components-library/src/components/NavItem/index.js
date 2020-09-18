/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import { Icon } from "../Icons";
import { Button } from "../Button";
import { Heading } from "../Heading";
import * as S from "./styles";

/**
 * Render a single Nav Item. This could be either a 'button' link, 'icon' link
 * @param {} props
 */
const NavItem = ({ onFocus, itemRef, type, text, href, ...props }) => {
  let inner = "";

  switch (type) {
    case "button":
      {
        // standards only allow dark buttons in nav dropdowns
        inner = (
          <Button
            {...props}
            class="nav-button"
            ref={itemRef}
            href={href}
            {...(onFocus ? { onFocus } : "")}
            medium
            dark
          >
            {text}
          </Button>
        );
      }
      break;
    case "icon":
      // Have to use className here because FontAwesome React component expects it
      inner = (
        <S.NavIcon
          {...props}
          href={href}
          {...(onFocus ? { onFocus } : "")}
          ref={itemRef}
          type={props.class}
        >
          {text}
        </S.NavIcon>
      );
      break;
    case "heading":
      return <Heading type="h3">{text}</Heading>;
    default:
      inner = (
        <S.NavLink
          href={href}
          {...(onFocus ? { onFocus } : "")}
          ref={itemRef}
          {...props}
        >
          {text}
        </S.NavLink>
      );
      break;
  }

  return <li>{inner}</li>;
};

NavItem.propTypes = {
  itemRef: PropTypes.oneOfType([
    // ref to actual DOM node of nav item
    // https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  location: PropTypes.array, // Array representation of the item's location in the Nav
  onFocus: PropTypes.func,
  type: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string.isRequired, // text always required (accessiblity and mobile)
  icon: PropTypes.string,
};

NavItem.defaultProps = {};

export default NavItem;
