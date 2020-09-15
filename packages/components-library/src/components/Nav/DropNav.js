/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import PropTypes from "prop-types";
import NavItem from "./NavItem";
import * as S from "./styles";

const DropNav = ({
  item,
  submenus,
  mobileWidth,
  width,
  setFocus,
  pIndex,
  isOpen,
  setOpen,
  topRef,
  hasFocus,
  ...props
}) => {
  const toggle = index => {
    if (isOpen) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const navOpen = index => {
    setOpen(index);
  };

  return (
    <li>
      <a
        target={item.target}
        title={item.title ? item.title : item.text}
        role="button"
        aria-expanded={isOpen}
        onMouseDown={e => {
          e.preventDefault();
          toggle(pIndex);
          //setFocus([pIndex, -1, -1]);
        }}
        onKeyDown={e => {
          const code = e.keyCode;

          if (code == 32 || code == 13) {
            toggle(pIndex);
          }
        }}
        onFocus={e => {
          //navOpen(pIndex);
          setFocus([pIndex, -1, -1]);
        }}
        tabIndex="0"
        ref={topRef}
      >
        {item.text} <S.IconChevronDown sr={item.text} className={isOpen ? "open" : ""} />
      </a>

      <S.DdMenu {...{ open: isOpen }}>
        {submenus.map((sub, index) => {
          return (
            <ul>
              {sub.map((item, ind) => {
                return (
                  <NavItem
                    onFocus={() => {
                      setFocus([pIndex, index, ind]);
                      navOpen(pIndex);
                    }}
                    itemRef={submenus[index][ind].ref}
                    type={item.hasOwnProperty("type") ? item.type : undefined}
                    color={
                      item.hasOwnProperty("color") ? item.color : undefined
                    }
                    class={
                      item.hasOwnProperty("class") ? item.class : undefined
                    }
                    href={item.hasOwnProperty("href") ? item.href : undefined}
                    text={item.text}
                  />
                );
              })}
            </ul>
          );
        })}
      </S.DdMenu>
    </li>
  );
};

DropNav.propTypes = {
  setFocus: PropTypes.func,
  location: PropTypes.array, // Array representation of the item's location in the Nav
  item: PropTypes.object.isRequired, // top level nav item
  submenus: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired, // submenus
  topRef: PropTypes.oneOfType([
    // ref to actual DOM node of nav item
    // https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  mobileWidth: PropTypes.number,
  width: PropTypes.number,
  pIndex: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  hasFocus: PropTypes.bool,
};

DropNav.defaultProps = {
  menus: [],
  top: false,
  mobileWidth: 992,
  isOpen: false,
};

export default DropNav;
