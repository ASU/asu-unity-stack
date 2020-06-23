/** @jsx h */
/* eslint-disable react/prop-types */
import { h, createRef } from "preact";
import { useEffect, useState, useCallback } from "preact/compat";
import * as S from "./styles";

const Nav = props => {
  const [focused, setFocus] = useState([-1, -1, -1]);
  const width = props.width;
  const navTree = props.navTree;

  const setFocusCallBack = useCallback(
    loc => {
      setFocus(loc);
    },
    [focused]
  );

  let navList = [];

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
          setFocusCallBack(moveLeft(focused, derState, navList));
          break;
        case Right:
          e.preventDefault();
          setFocusCallBack(moveRight(focused, derState, navList));
          break;
        case Up:
          e.preventDefault();
          setFocusCallBack(moveUp(focused, derState, navList));
          break;
        case Down:
          e.preventDefault();
          setFocusCallBack(moveDown(focused, derState, navList));
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const derState = deriveState(focused, navList);

    if (derState.hasFocus) {
      const loc = focused;

      if (loc[0] === -1 && loc[1] === -1 && loc[2] === -1) {
        return false;
      }

      if (derState.isTop) {
        navList[loc[0]].ref.current.focus();
      } else {
        navList[loc[0]].menus[loc[1]][loc[2]].current.focus();
      }
    }
  }, [focused, navList]);

  return (
    <S.Nav>
      <ul aria-label="ASU" onKeyDown={handleKeyDown}>
        {navTree.map((item, index) => {
          const newRef = createRef();
          const subs = item.items;

          if (!navList[index]) {
            navList[index] = {};
          }

          navList[index].ref = newRef;
          navList[index].text = item.text;
          navList[index].menus = [];

          // Return a DropNav with submenus if they exist below parent
          if (subs && subs[0].length > 0) {
            // Create a ref for each submenu item, which will be
            // passed down to the DropNav to manage focus
            for (let i = 0; i < subs.length; i++) {
              for (let j = 0; j < subs[i].length; j++) {
                const childRef = createRef();

                if (!navList[index].menus[i]) {
                  navList[index].menus[i] = [];
                }

                navList[index].menus[i][j] = childRef;
              }
            }

            return (
              <DropNav
                width={width}
                item={item}
                itemRefs={navList[index]}
                pIndex={index}
                setFocus={setFocusCallBack}
                topRef={newRef}
              />
            );
          }

          // Return a single menu item if there are no submenus
          return (
            <li key={index}>
              <a
                href={item.href}
                title={item.title ? item.title : item.text}
                target={item.target}
                onFocus={() => {
                  setFocusCallBack([index, -1, -1]);
                }}
                ref={newRef}
                tabIndex="0"
              >
                {item.type != "icon" ? (
                  item.text
                ) : (
                  <span class={item.class}>
                    <span class="sr-only">{item.text}</span>
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </S.Nav>
  );
};

const DropNav = props => {
  const item = props.item;
  const width = props.width;
  const itemRefs = props.itemRefs;
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
        setOpen(false);
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
        {item.items.map((sub, index) => {
          return (
            <ul>
              {sub.map((item, ind) => {
                return (
                  <li key={ind}>
                    <a
                      title={item.title}
                      href={item.href}
                      ref={itemRefs.menus[index][ind]}
                      onFocus={() => {
                        navOpen();
                        setFocus([pIndex, index, ind]);
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </S.DdMenu>
    </li>
  );
};

Nav.defaultProps = {
  navTree: [],
};

DropNav.defaultProps = {
  menus: [],
};

/***
 * Helper function returns more info about current focus state
 */
const deriveState = (state, navList) => {
  const loc = state;
  let hasFocus = false;
  let isTop = false;
  let hasSubs = false;

  // nothing has focus
  if (loc[0] == -1 && loc[1] == -1 && loc[2] == -1) {
    return {
      hasFocus,
    };
  }

  hasFocus = true;

  // Does current top level item have submenus
  if (navList[loc[0]].menus.length > 0) {
    hasSubs = true;
  }

  // Is top level item focused ?
  isTop = loc[1] === -1 || loc[2] === -1;

  return {
    hasFocus,
    isTop,
    hasSubs,
  };
};

/** Move focus left.
 * Calculate and return a state array containing the next position. */
const moveLeft = (state, dstate, navList) => {
  const topIndex = state[0];
  // initialize to current position
  let move = state;

  move =
    typeof navList[topIndex - 1] !== "undefined"
      ? [topIndex - 1, -1, -1]
      : [0, -1, -1];

  // TODO: handle mega menu case

  return move;
};

/** Move focus right.
 * Calculate and return a state array containing the next position. */
const moveRight = (state, dstate, navList) => {
  const topIndex = state[0];

  // initialize to current position
  let move = state;

  move =
    typeof navList[topIndex + 1] !== "undefined"
      ? [topIndex + 1, -1, -1]
      : [navList.length - 1, -1, -1];

  // TODO: handle mega menu case

  return move;
};

/** Move focus up.
 * Calculate and return a state array containing the next position. */
const moveUp = (state, dstate, navList) => {
  const topIndex = state[0];
  let menus = [];
  // initialize to current position
  let move = state;

  if (dstate.hasSubs) {
    menus = navList[topIndex].menus;
  }

  // handle moving focus from top parent
  if (dstate.isTop) {
    // stay on same node if at top of menu
    move = moveLeft(state, dstate, navList);

    // handle moving focus up submenu
  } else {
    const x = state[1];
    const y = state[2];

    move =
      typeof menus[x][y - 1] !== "undefined"
        ? [topIndex, x, y - 1]
        : [topIndex, -1, -1];
  }

  return move;
};

/** Move focus up.
 * Calculate and return a state array containing the next position. */
const moveDown = (state, dstate, navList) => {
  const topIndex = state[0];
  let menus = [];
  // initialize to current position
  let move = state;

  if (dstate.hasSubs) {
    menus = navList[topIndex].menus;
  }

  // handle moving focus from top parent
  if (dstate.isTop && dstate.hasSubs) {
    // Move to first item of first submenu
    move = [topIndex, 0, 0];

    // Move focus to the right if on top with no children
  } else if (dstate.isTop) {
    move = moveRight(state, dstate, navList);

    // Move down the submenu if able
  } else {
    const x = state[1];
    const y = state[2];

    move =
      typeof menus[x][y + 1] !== "undefined"
        ? [topIndex, x, y + 1]
        : moveRight(state, dstate, navList);
  }

  return move;
};

export default Nav;
