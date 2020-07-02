/** @jsx h */
/* eslint-disable react/prop-types */
import { h, createRef } from "preact";
import { useEffect, useState, useCallback, useMemo } from "preact/compat";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import PropTypes from "prop-types";
import NavItem from "./NavItem";
import * as S from "./styles";

/**
 * Render entire Nav. This includes
 * @param {} props
 */
const Nav = props => {
  const [focused, setFocus] = useState([-1, -1, -1]);
  const navTree = props.navTree;
  // get window dimensions
  const { height, width } = useWindowDimensions();

  const setFocusCallback = newFocus => {
    setFocus(newFocus);
  };

  /***
   * Compile a list of Refs to interact with the focus state of Nav menu
   */
  const navList = useMemo(() => {
    return navTree.map(item => {
      const newRef = createRef();

      // copy the prop to a new object, to avoid mutating props on render
      let menus = [];

      // Destructure the items array of the nav item to items variable,
      // temp is now the nav item without the 'items' array
      let { items, ...temp } = item;

      if (items && items[0].length > 0) {
        // Create a ref for each submenu item, which will be
        // passed down to the DropNav to manage focus
        for (let i = 0; i < items.length; i++) {
          for (let j = 0; j < items[i].length; j++) {
            if (!menus[i]) {
              menus[i] = [];
            }

            menus[i][j] = Object.assign({}, items[i][j]);

            // Heading isn't focusable, so don't pass ref
            if (items[i][j].type != "heading") {
              const childRef = createRef();
              menus[i][j].ref = childRef;
            }
          }
        }
      }

      return {
        ref: newRef,
        item: temp,
        menus,
      };
    });
  }, [navTree]);

  //event handler for side-to-side keyboard navigation (top level items)
  const handleKeyDown = e => {
    const Left = 37;
    const Up = 38;
    const Right = 39;
    const Down = 40;

    const derState = deriveState(focused, navList);

    if (derState.hasFocus) {
      switch (e.keyCode) {
        case Left:
          e.preventDefault();
          setFocusCallback(moveLeft(focused, derState, navList));
          break;
        case Right:
          e.preventDefault();
          setFocusCallback(moveRight(focused, derState, navList));
          break;
        case Up:
          e.preventDefault();
          setFocusCallback(moveUp(focused, derState, navList));
          break;
        case Down:
          e.preventDefault();
          setFocusCallback(moveDown(focused, derState, navList));
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const derState = deriveState(focused, navList);

    if (derState.hasFocus) {
      const [x,y,z] = focused;

      if (x === -1 && y === -1 && z === -1) {
        return false;
      }

      if (derState.isTop) {
        if (navList[x].ref) {
          navList[x].ref.current.focus();
        }
      } else if (navList[x].menus[y][z].ref) {1
        navList[x].menus[y][z].ref.current.focus();
      }
    }
  }, [focused, navList]);

  const onBlurNav = e => {
    // only change state if focus moves away from
    // container element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFocusCallback([-1, -1, -1]);
    }
  };

  return (
    <S.Nav className={props.mobileOpen ? "open-nav" : ""}>
      <ul onBlurCapture={onBlurNav} aria-label="ASU" onKeyDown={handleKeyDown}>
        {navList.map((item, index) => {
          const navItem = item.item;
          const subs = item.menus;

          if (subs && subs.length > 0 && subs[0].length > 0) {
            return (
              <DropNav
                width={width}
                item={navItem}
                submenus={subs}
                pIndex={index}
                setFocus={setFocusCallback}
                topRef={item.ref}
              />
            );
          }

          // Return a single nav item if there are no submenus
          return (
            <NavItem
              item={navItem}
              onFocus={() => {
                setFocusCallback([index, -1, -1]);
              }}
              itemRef={item.ref}
              tabIndex="0"
            />
          );
        })}
      </ul>
    </S.Nav>
  );
};

Nav.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
  mobileOpen: PropTypes.bool,
};

Nav.defaultProps = {
  navTree: [],
  mobileOpen: false,
};

const DropNav = ({ item, submenus, mobileWidth, ...props }) => {
  const width = props.width;
  const setFocus = props.setFocus;
  const pIndex = props.pIndex;

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(oldOpen => !oldOpen);
  };

  const navOpen = open => {
    if (!open) {
      setOpen(true);
    }
  };

  const onBlur = useCallback(
    e => {
      // only change state if focus moves away from
      // container element
      if (!e.currentTarget.contains(e.relatedTarget)) {
        if (width > mobileWidth) {
          setOpen(false);
        }
      }
    },
    [open]
  );

  return (
    <li onBlurCapture={onBlur}>
      <a
        target={item.target}
        title={item.title ? item.title : item.text}
        role="navigation"
        onMouseDown={e => {
          e.preventDefault();
          toggle();
          setFocus([pIndex, -1, -1]);
        }}
        onFocus={() => {
          navOpen();
          setFocus([pIndex, -1, -1]);
        }}
        tabIndex="0"
        ref={props.topRef}
      >
        {item.text} <S.IconChevronDown sr={item.text} />
      </a>

      <S.DdMenu {...{ open }}>
        {submenus.map((sub, index) => {
          return (
            <ul>
              {sub.map((item, ind) => {
                return (
                  <NavItem
                    item={item}
                    onFocus={() => {
                      setFocus([pIndex, index, ind]);
                      navOpen();
                    }}
                    itemRef={submenus[index][ind].ref}
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
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  mobileWidth: PropTypes.number,
  width: PropTypes.number,
};

DropNav.defaultProps = {
  menus: [],
  top: false,
  mobileWidth: 992,
};

/***************** Utility functions **************/

/***
 * Helper function returns more info about current focus state
 */
const deriveState = (state, navList) => {
  const [x, y, z] = state;
  let hasFocus = false;
  let isTop = false;
  let hasSubs = false;

  // nothing has focus
  if (x == -1 && y == -1 && z == -1) {
    return {
      hasFocus,
    };
  }

  hasFocus = true;

  // Does current top level item have submenus
  if (navList[x].menus.length > 0) {
    hasSubs = true;
  }

  // Is top level item focused ?
  isTop = y === -1 || z === -1;

  return {
    hasFocus,
    isTop,
    hasSubs,
  };
};

/** Move focus left.
 * Calculate and return a state array containing the next position. */
const moveLeft = (state, dstate, navList) => {
  const [x, y, z] = state;
  // initialize to current position
  let move = state;

  // if we're on a submenu with sibling submenus, move to next menu
  if (!dstate.isTop) {
    if (typeof navList[x].menus[y - 1] !== "undefined") {

      // if next submenu has heading, move to first item
      //TODO: could a column have a heading with no items under?
      return navList[x].menus[y-1][0].ref ? [x, y-1, 0] : [x, y-1, 1];
    }
  }

  move =
    typeof navList[x - 1] !== "undefined"
      ? [x - 1, -1, -1]
      : [0, -1, -1];

  if (checkFocus(move, navList) === false)  {
    return moveLeft(move, deriveState(move, navList), navList);
  }

  return move;
};

/** Move focus right.
 * Calculate and return a state array containing the next position. */
const moveRight = (state, dstate, navList) => {
  const [x, y, z] = state;

  // initialize to current position
  let move = state;

  // if we're on a submenu with sibling submenus, move to next menu
  if (!dstate.isTop) {
    if (typeof navList[x].menus[y + 1] !== "undefined") {

      // if next submenu has heading, move to first item
      //TODO: could a column have a heading with no items under?
      return navList[x].menus[y+1][0].ref ? [x, y+1, 0] : [x, y+1, 1];
    }
  }

  move =
    typeof navList[x + 1] !== "undefined"
      ? [x + 1, -1, -1]
      : [navList.length - 1, -1, -1];

  // TODO: handle mega menu case
  if (checkFocus(move, navList) === false)  {
    return moveRight(move, deriveState(move, navList), navList);
  }

  return move;
};

/** Move focus up.
 * Calculate and return a state array containing the next position. */
const moveUp = (state, dstate, navList) => {
  const [x, y, z] = state;
  let menus = [];
  // initialize to current position
  let move = state;

  if (dstate.hasSubs) {
    menus = navList[x].menus;
  }

  // handle moving focus from top parent
  if (dstate.isTop) {
    // stay on same node if at top of menu
    move = moveLeft(state, dstate, navList);

  // handle moving focus up submenu
  } else {

    move =
      typeof menus[x][y - 1] !== "undefined"
        ? [x, y, z - 1]
        : [x, -1, -1];
  }

  if (checkFocus(move, navList) === false)  {
    return moveUp(move, deriveState(move, navList), navList);
  }

  return move;
};

/** Move focus up.
 * Calculate and return a state array containing the next position. */
const moveDown = (state, dstate, navList) => {
  const [x, y, z] = state;
  let menus = [];
  // initialize to current position
  let move = state;

  if (dstate.hasSubs) {
    menus = navList[x].menus;
  }

  // handle moving focus from top parent
  if (dstate.isTop && dstate.hasSubs) {
    // Move to first item of first submenu
    move = [x, 0, 0];

    // Move focus to the right if on top with no children
  } else if (dstate.isTop) {
    move = moveRight(state, dstate, navList);

  // Move down the submenu if able
  } else {

    move =
      typeof menus[y][z + 1] !== "undefined"
        ? [x, y, z + 1]
        : moveRight(state, dstate, navList);
  }

  if (checkFocus(move, navList) === false)  {
    return moveDown(move, deriveState(move, navList), navList);
  }

  return move;
};

const checkFocus = (move, navList) => {
  const dstate = deriveState(move, navList);

  if (!dstate.hasFocus) {
    return false;
  }

  if (dstate.isTop) {
    if (navList[move[0]].ref) {
      return true;
    }
  } else if (navList[move[0]].menus[move[1]][move[2]].ref) {
    return true;
  }

  return false;
};

export default Nav;
