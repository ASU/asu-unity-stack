import React from "react";
import PropTypes from "prop-types";
import styles from "./AsuNav.css";
import AsuDropdownNav from "../AsuDropdownNav";
import classnames from "classnames";
import AsuNavGlobalDefaults from "./AsuNavGlobalDefaults";

// todo: handle the keyboard navigation here
const AsuNav = props => {
  const navClass = classnames(styles.asuNavWrapper, props.className);
  const [focused, setFocus] = React.useState(0);

  let navList = [];

  //event handler for side-to-side keyboard navigation (top level items)
  const handleKeyDown = React.useCallback(
    e => {
      if (e.keyCode === 37 && focused > 0) {
        navList[focused - 1].current.focus();

        setFocus(prevFoc => prevFoc - 1);
      } else if (e.keyCode === 39 && focused < navList.length - 1) {
        navList[focused + 1].current.focus();

        setFocus(prevFoc => prevFoc + 1);
      }
    },
    [focused]
  );

  return (
    <nav className={navClass}>
      <ul
        className={styles.asuNav}
        role="navigation"
        aria-label="ASU"
        onKeyDown={handleKeyDown}
      >
        {props.globalNav.map((item, index) => {
          const newRef = React.createRef();

          navList.push(newRef);

          return (
            <li key={index} className={styles.asuNavItemTop}>
              {item.items ? (
                <AsuDropdownNav {...item} topRef={newRef} />
              ) : (
                // if no child items, render as link
                <a
                  href={item.href}
                  title={item.title ? item.title : item.text}
                  target={item.target}
                  ref={newRef}
                >
                  {item.text}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

AsuNav.propTypes = {
  siteNav: PropTypes.arrayOf(PropTypes.object),
  globalNav: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

AsuNav.defaultProps = {
  globalNav: AsuNavGlobalDefaults
};

export default AsuNav;
