/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import { Icon } from "../Icons";
import { Button } from "../Button";
import { Heading } from "../Heading";

/**
 * Render a single Nav Item. This could be either a 'button' link, 'icon' link
 * TODO: test ability to render arbitrary html string as nav Item.
 * @param {} props
 */
const NavItem = ({ onFocus, itemRef, type, text, color, href, ...props }) => {
  let inner = "";

  switch (type) {
    case "button":
      {
        const bcolor = color ? { [color]: true } : {};

        inner = (
          <Button medium {...bcolor}>
            {text}
          </Button>
        );
      }
      break;
    case "icon":
      // Have to use className here because FontAwesome React component expects it
      inner = (
        <>
          <Icon type={props.class} className="icon-nav-item" />
          <span class="mobile-only">{text}</span>
        </>
      );
      break;
    case "heading":
      inner = <Heading type="h3">{text}</Heading>;
      break;
    default:
      inner = text;
      break;
  }

  // return the heading without a link if item type is heading
  if (type == "heading") {
    return inner;
  }

  return (
    <li>
      <a href={href} {...(onFocus ? { onFocus } : "")} ref={itemRef}>
        {inner}
      </a>
    </li>
  );
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
  color: PropTypes.string,
};

NavItem.defaultProps = {};

export default NavItem;
