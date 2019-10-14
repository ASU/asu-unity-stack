import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AsuDropdownNav.css";
import classNames from "classnames";

const DropdownContext = React.createContext();

const useDropdownContext = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error(
      `Dropdown compound components cannot be rendered outside the AsuDropdownNav component`
    );
  }
  return context;
};

const TopItem = props => {
  const { open, toggle } = useDropdownContext();

  // if the item doesn't have an href property, render as a toggle
  let topItem = (
    <span onClick={props.items && !props.href ? toggle : undefined}>
      {props.text}
    </span>
  );

  // Wrap in a link if href provided for top level item
  if (props.href) {
    topItem = (
      <a className={styles.asuNavA} href={props.href} target={props.target}>
        {topItem}
      </a>
    );
  }

  // Add the arrow toggle icon if child items
  if (props.items) {
    topItem = (
      <React.Fragment>
        {topItem}
        <span
          className={open ? styles.icoSortUp : styles.icoSortDown}
          onClick={toggle}
        ></span>
      </React.Fragment>
    );
  }

  return topItem;
};

const AsuDropdownNav = props => {
  const navClass = styles.asuNavItemTop;
  const [open, setOpen] = useState(false);
  const toggle = React.useCallback(() => setOpen(oldOpen => !oldOpen), []);
  const value = React.useMemo(() => ({ open, toggle }), [open]);

  const mouseEnter = React.useCallback(() => {
    setOpen(true);
  }, [open]);

  const mouseLeave = React.useCallback(() => {
    setOpen(false);
  }, [open]);

  const subStyles = classNames(
    styles.subMenu,
    open ? styles.subSlideIn : styles.subSlideOut
  );

  let linkRefs = [];

  if (props.items) {
    for (let i = 0; i < props.items.length; i++) {
      let newRef = React.createRef();
      linkRefs.push(newRef);
    }
  }

  return (
    <DropdownContext.Provider value={value}>
      <div
        title={props.title ? props.title : props.text}
        role="navigation"
        className={navClass}
        onMouseEnter={props.items ? mouseEnter : undefined}
        onMouseLeave={props.items ? mouseLeave : undefined}
      >
        <TopItem {...props} />
        {props.items ? (
          <ul className={subStyles}>
            {props.items.map((item, index) => {
              return (
                <li className={styles.asuNavItem} key={index}>
                  <a
                    title={item.title}
                    href={item.href}
                    ref={linkRefs[index]}
                    tabIndex="0"
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </DropdownContext.Provider>
  );
};

AsuDropdownNav.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  href: PropTypes.string,
  target: PropTypes.string
};

AsuDropdownNav.defaultProps = {};

export default AsuDropdownNav;
