import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./AsuDropdownNav.css";
import classNames from "classnames";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TopItem = props => {
  // if the item doesn't have an href property, render as a toggle
  let topItem = (
    <span onClick={!props.href ? props.toggle : undefined}>{props.text}</span>
  );

  // Wrap in a link if href provided for top level item
  if (props.href) {
    topItem = (
      <a
        className={styles.asuNavA}
        href={props.href}
        target={props.target}
        ref={props.topRef}
        onFocus={props.focus}
      >
        {topItem}
      </a>
    );
  }

  // Add the arrow toggle icon
  return (
    <React.Fragment>
      {topItem}
      <span
        className={props.open ? styles.icoSortUp : styles.icoSortDown}
        onClick={props.toggle}
      ></span>
    </React.Fragment>
  );
};

const AsuDropdownNav = props => {
  const navClass = styles.asuNavItemTop;
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(oldOpen => !oldOpen), []);
  const { height, width } = useWindowDimensions();
  const [focused, setFocus] = useState(-1);

  let linkRefs = [];
  linkRefs.push(props.topRef);

  //event handler for side-to-side keyboard navigation (top level items)
  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 38 && focused > 0) {
        setFocus(prevFoc => prevFoc - 1);
      } else if (e.keyCode === 40 && focused === -1) {
        setFocus(1);
      } else if (e.keyCode === 40 && focused < linkRefs.length - 1) {
        setFocus(prevFoc => prevFoc + 1);
      }
    },
    [focused]
  );

  const navOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const navClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  const onBlur = useCallback(
    e => {
      // only change state if focus moves away from
      // container element
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setOpen(false);
        setFocus(-1);
      }
    },
    [open, focused]
  );

  const subStyles = classNames(
    styles.subMenu,
    open ? styles.subSlideIn : styles.subSlideOut
  );

  useEffect(() => {
    if (focused != -1) {
      linkRefs[focused].current.focus();
    }
  }, [focused]);

  return (
    <div
      title={props.title ? props.title : props.text}
      role="navigation"
      className={navClass}
      onKeyDown={handleKeyDown}
      {...(width > 990 && {
        onMouseEnter: navOpen,
        onMouseLeave: navClose,
        onFocus: navOpen,
        onBlur: onBlur
      })}
    >
      <TopItem {...props} toggle={toggle} open={open} />

      <ul className={subStyles}>
        {props.items.map((item, index) => {
          const newRef = React.createRef();
          linkRefs.push(newRef);

          return (
            <li className={styles.asuNavItem} key={index}>
              <a title={item.title} href={item.href} ref={newRef} tabIndex="0">
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

AsuDropdownNav.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  topRef: PropTypes.ref,
  focus: PropTypes.func
};

AsuDropdownNav.defaultProps = {};

TopItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  topRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  focus: PropTypes.func
};

TopItem.defaultProps = {};

export default AsuDropdownNav;
