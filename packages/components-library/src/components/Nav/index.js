import {
  useEffect,
  useState,
  useMemo,
  useRef,
  createRef,
  forwardRef,
  useImperativeHandle,
} from "preact/compat";
import PropTypes from "prop-types";

import { trackGAEvent } from "../../services/googleAnalytics";
import { Button } from "../Button";
import NavItem from "../NavItem";
import DropNav from "./DropNav";
import HoverDropNav from "./HoverDropNav";
import * as S from "./styles";

/**
 * Render entire Nav.
 * @param {} props
 */
const Nav = forwardRef(
  (
    {
      navTree,
      width,
      mobileOpen,
      maxMobileHeight,
      buttons,
      injectStyles,
      breakpoint,
      expandOnHover,
    },
    ref
  ) => {
    /** State to keep track of currently focused Nav Item */
    const [focused, setFocus] = useState([-1, -1, -1]);
    /** State for keeping track of open dropdown nav */
    const [open, setOpen] = useState(-1);

    useImperativeHandle(ref, () => ({
      forceToggle(whatWasClicked) {
        let isAriaOpen = false;

        // Check if already open
        for (let i = 0; i < whatWasClicked.attributes.length; i++) {
          let attribute = whatWasClicked.attributes[i];
          if (attribute.name === "aria-expanded") {
            if (attribute.value === "true") {
              isAriaOpen = true;
            }
          }
        }

        const id = whatWasClicked.dataset.onclickIdentifier;
        if (
          !isAriaOpen ||
          isAriaOpen !== (whatWasClicked.dataset.onclickDropdownOpen === "true")
        ) {
          setOpen(parseInt(id.substring(id.indexOf(".") + 1)));
          whatWasClicked.dataset.onclickDropdownOpen = "true";
        } else {
          setOpen(-1);
          whatWasClicked.dataset.onclickDropdownOpen = "false";
        }
      },

      forceOpen(whatWasClicked) {
        const id = whatWasClicked.dataset.onclickIdentifier;
        setOpen(parseInt(id.substring(id.indexOf(".") + 1)));
        whatWasClicked.dataset.onclickDropdownOpen = "true";
      },
    }));

    const setFocusCallback = newFocus => {
      setFocus(newFocus);
    };

    // Get breakpoint from theme and props
    const bpoint = breakpoint === "Xl" ? S.BreakpointXl : S.BreakpointLg;
    const bpointInt = parseInt(bpoint, 10);

    /***
     * Compile a list of Refs to interact with the focus state of Nav menu
     */
    const navList = useMemo(() => {
      // return empty array if navtree not defined
      if (!Array.isArray(navTree) || navTree.length == 0) {
        return [];
      }

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

    //event handler keyboard navigation
    const handleKeyDown = e => {
      const Left = 37;
      const Up = 38;
      const Right = 39;
      const Down = 40;
      const Escape = 27;

      const derState = deriveFocusState(focused, navList);

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
            // Open the menu before moving down to submenu item
            if (derState.isTop && derState.hasSubs && open != focused[0]) {
              setOpen(focused[0]);
              return;
            }

            e.preventDefault();
            setFocusCallback(moveDown(focused, derState, navList));
            break;
          case Escape:
            // handle tab key
            if (!derState.isTop) {
              setFocusCallback([focused[0], -1, -1]);
            }
            break;
          default:
            break;
        }
      }
    };

    /** When focus state changes, call .focus() on actual DOM node */
    useEffect(() => {
      const derState = deriveFocusState(focused, navList);

      if (derState.hasFocus) {
        const [x, y, z] = focused;

        if (derState.isTop) {
          // only focus the node if it's not already focused
          if (
            navList[x].ref &&
            navList[x].ref.current !== document.activeElement
          ) {
            navList[x].ref.current.focus();
          }

          // if currently focused item is not in open menu, close menu
          if (open !== x) {
            setOpen(-1);
          }
        } else if (
          navList[x].menus[y][z].ref &&
          navList[x].menus[y][z].ref.current !== document.activeElement
        ) {
          navList[x].menus[y][z].ref.current.focus();
        }

        // if keypress causes focus to leave open menu, close menu
      } else if (open !== -1) {
        setOpen(-1);
      }
    }, [focused, navList]);

    /*** Detecting click outside of container */
    const navRef = useRef(null);

    useEffect(() => {
      // close nav if clicked outside nav
      const handleClickOutside = event => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setOpen(-1);
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [navRef]);

    // handle focus moving out of Nav
    const onBlurNav = e => {
      // only change state if focus moves away from
      // container element
      if (!e.currentTarget.contains(e.relatedTarget)) {
        // remove focus
        setFocusCallback([-1, -1, -1]);
      }
    };

    const DropComponent = expandOnHover ? HoverDropNav : DropNav;
    const mobile = width <= bpointInt;

    return (
      <S.Nav
        open={mobileOpen}
        maxMobileHeight={maxMobileHeight}
        injectStyles={injectStyles}
        breakpoint={breakpoint}
      >
        <S.NavList
          {...(!mobile ? { onfocusout: onBlurNav } : {})}
          onKeyDown={handleKeyDown}
          ref={navRef}
        >
          {navList.map((item, pindex) => {
            const navItem = item.item;
            const subs = item.menus;

            if (subs && subs.length > 0 && subs[0].length > 0) {
              return (
                <DropComponent
                  {...navItem}
                  pIndex={pindex}
                  setFocus={setFocusCallback}
                  ref={item.ref}
                  isOpen={open == pindex}
                  setOpen={setOpen}
                  mega={subs.length > 2} // add mega class if dropdown contains 3 or more menus
                  mobile={mobile}
                >
                  {subs.map((sub, index) => {
                    return (
                      <S.MenuColumn key={`mwnu-item-${pindex}-${index}`}>
                        {sub.map((item, ind) => {
                          return (
                            <NavItem
                              key={`nav-item-${pindex}-${index}-${ind}`}
                              onFocus={() => {
                                setFocus([pindex, index, ind]);
                                setOpen(pindex);
                                trackGAEvent({
                                  text: item.text,
                                  component: navItem.text,
                                });
                              }}
                              ref={subs[index][ind].ref}
                              type={
                                item.hasOwnProperty("type")
                                  ? item.type
                                  : undefined
                              }
                              color={
                                item.hasOwnProperty("color")
                                  ? item.color
                                  : undefined
                              }
                              class={
                                item.hasOwnProperty("class")
                                  ? item.class
                                  : undefined
                              }
                              href={
                                item.hasOwnProperty("href")
                                  ? item.href
                                  : undefined
                              }
                            >
                              {item.text}
                            </NavItem>
                          );
                        })}
                      </S.MenuColumn>
                    );
                  })}
                </DropComponent>
              );
            }

            // Return a single nav item if there are no submenus
            return (
              <NavItem
                key={`nav-item-${pindex}`}
                onFocus={() => {
                  trackGAEvent({ text: navItem.text });
                  setFocusCallback([pindex, -1, -1]);
                }}
                ref={item.ref}
                type={navItem.hasOwnProperty("type") ? navItem.type : undefined}
                color={
                  navItem.hasOwnProperty("color") ? navItem.color : undefined
                }
                class={navItem.hasOwnProperty("class") ? navItem.class : ""}
                href={navItem.hasOwnProperty("href") ? navItem.href : undefined}
                selected={
                  navItem.hasOwnProperty("selected") ? navItem.selected : false
                }
              >
                {navItem.text}
              </NavItem>
            );
          })}
        </S.NavList>
        {
          // render buttons if props is passed
          buttons.length > 0 && (
            <S.ButtonForm>
              {buttons.map((item, index) => {
                let color = item.color ? item.color : "maroon";

                // Return a single nav item if there are no submenus
                return (
                  <Button
                    key={`button-${index}`}
                    href={item.href}
                    {...{ [color]: true }}
                    onFocus={() => trackGAEvent({ text: item.text })}
                    medium
                  >
                    {item.text}
                  </Button>
                );
              })}
            </S.ButtonForm>
          )
        }
      </S.Nav>
    );
  }
);

Nav.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
  buttons: PropTypes.arrayOf(PropTypes.object),
  expandOnHover: PropTypes.bool,
  mobileOpen: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  maxMobileHeight: PropTypes.number,
  injectStyles: PropTypes.bool,
  breakpoint: PropTypes.oneOf(["Lg", "Xl"]),
};

Nav.defaultProps = {
  navTree: [],
  mobileOpen: false,
  expandOnHover: false,
  width: 1920,
  height: 1080,
  maxMobileHeight: -1,
  buttons: [],
  injectStyles: false,
};

/***************** Helper functions **************/

/***
 * Helper function returns more info about current focus state
 */
const deriveFocusState = (state, navList) => {
  const [x, y, z] = state;
  let hasFocus = false;
  let isTop = false;
  let hasSubs = false;
  let isLast = false;
  let isFirst = false;

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

  // Is this the last focusable item in nav menu
  if (isTop && x === navList.length - 1) {
    isLast = true;
  }

  // Is this the first focusable item
  if (isTop && x === 0) {
    isFirst = true;
  }

  return {
    hasFocus,
    isTop,
    hasSubs,
    isLast,
    isFirst,
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
      return navList[x].menus[y - 1][0].ref ? [x, y - 1, 0] : [x, y - 1, 1];
    }
    // navigate back to dropdown toggle if moving left from leftmost submenu
    return [x, -1, -1];
  }

  // if at the top move leftward
  move = typeof navList[x - 1] !== "undefined" ? [x - 1, -1, -1] : [0, -1, -1];

  if (checkFocus(move, navList) === false) {
    return moveLeft(move, deriveFocusState(move, navList), navList);
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
      return navList[x].menus[y + 1][0].ref ? [x, y + 1, 0] : [x, y + 1, 1];
    }

    // navigate back to dropdown toggle if moving righward from rightmost submenu
    return [x, -1, -1];
  }

  move =
    typeof navList[x + 1] !== "undefined"
      ? [x + 1, -1, -1]
      : [navList.length - 1, -1, -1];

  // TODO: handle mega menu case
  if (checkFocus(move, navList) === false) {
    return moveRight(move, deriveFocusState(move, navList), navList);
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
    // move left if at top of menu
    move = moveLeft(state, dstate, navList);

    // handle moving focus up submenu
  } else {
    move = typeof menus[y][z - 1] !== "undefined" ? [x, y, z - 1] : [x, -1, -1];
  }

  if (checkFocus(move, navList) === false) {
    return moveUp(move, deriveFocusState(move, navList), navList);
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

  if (checkFocus(move, navList) === false) {
    return moveDown(move, deriveFocusState(move, navList), navList);
  }

  return move;
};

/**
 * Check a move to see if the next focused item is focusable.
 * @param {*} move
 * @param {*} navList
 */
const checkFocus = (move, navList) => {
  const dstate = deriveFocusState(move, navList);

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

export { Nav };
