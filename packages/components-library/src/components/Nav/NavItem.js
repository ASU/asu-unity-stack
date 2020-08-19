/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import { Icon } from "../Icons";
import { Button } from "../Button";

/**
 * Render a single Nav Item. This could be either a 'button' link, 'icon' link
 * TODO: test ability to render arbitrary html string as nav Item. Perhaps would
 * require this to be safe: https://www.npmjs.com/package/preact-html-converter
 * @param {} props
 */
const NavItem = ({onFocus, itemRef, ...props}) => {
  let inner = "";

  const {type, text, color, ...item} = props.item;

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
      inner = (<><Icon type={item.class} className="icon-nav-item" /><span class="mobile-only">{text}</span></>);
      break;
    case "heading":
      inner = <h3>{text}</h3>;
      break;
    default:
      inner = text;
      break;
  }

  // return the heading without a link if item type is heading
  if (item.type == "heading") {
    return inner;
  }

  return (
    <li>
      <a
        {...item}
        {...(onFocus ? { onFocus } : "")}
        ref={itemRef}
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
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  top: PropTypes.bool, // Is this a top-level nav item?
  location: PropTypes.array, // Array representation of the item's location in the Nav
  onFocus: PropTypes.func,
  type: PropTypes.string,
};

NavItem.defaultProps = {};

export default NavItem;
