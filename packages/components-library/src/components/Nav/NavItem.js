/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import PropTypes from "prop-types";
import Button from "../Button";

/**
 * Render a single Nav Item. This could be either a 'button' link, 'icon' link
 * TODO: test ability to render arbitrary html string as nav Item. Perhaps would
 * require this to be safe: https://www.npmjs.com/package/preact-html-converter
 * @param {} props
 */
const NavItem = props => {
  let inner = "";
  const item = props.item;

  switch (item.type) {
    case "button":
      inner = (
        <Button {...(item.color ? item.color : "")} medium>
          {item.text}
        </Button>
      );
      break;
    case "icon":
      inner = (
        <span class={item.class}>
          <span class="sr-only">{item.text}</span>
        </span>
      );
      break;
    default:
      inner = item.text;
      break;
  }

  return (
    <li>
      <a
        href={item.href}
        title={item.title ? item.title : item.text}
        target={item.target}
        {...(props.onFocus ? { onFocus: props.onFocus } : "")}
        ref={props.itemRef}
        tabIndex="0"
      >
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
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  top: PropTypes.bool, // Is this a top-level nav item?
  location: PropTypes.array, // Array representation of the item's location in the Nav
  onFocus: PropTypes.func,
};

NavItem.defaultProps = {};

export default NavItem;
