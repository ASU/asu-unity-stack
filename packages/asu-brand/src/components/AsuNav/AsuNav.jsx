import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./AsuNav.css";
import AsuDropdownNav from "../AsuDropdownNav";
import classnames from "classnames";
import AsuNavGlobalDefaults from "./AsuNavGlobalDefaults";

const AsuNav = props => {
  const navClass = classnames(styles.asuNavWrapper, props.className);
  const [focused, setFocus] = useState(-1);

  let navList = [];

  //event handler for side-to-side keyboard navigation (top level items)
  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 37 && focused > 0) {

        setFocus(prevFoc => prevFoc - 1);
      } else if (e.keyCode === 39 && focused < navList.length - 1) {

        setFocus(prevFoc => prevFoc + 1);
      }
    },
    [focused]
  );

  useEffect(() => {
    if (focused != -1) {
      navList[focused].current.focus();
    }
  }, [focused]);

  return (
    <nav className={navClass}>
      <ul
        className={styles.asuNav}
        aria-label="ASU"
        onKeyDown={handleKeyDown}
      >
        {props.globalNav.map((item, index) => {
          const newRef = React.createRef();
          const setFocusCallback = useCallback(() => {
            setFocus(index)
          }, [focused]);

          navList.push(newRef);

          return (
            <li key={index} className={styles.asuNavItemTop}>
              {item.items ? (
                <AsuDropdownNav {...item} topRef={newRef} focus={setFocusCallback}/>
              ) : (
                // if no child items, render as link
                <a
                  href={item.href}
                  title={item.title ? item.title : item.text}
                  target={item.target}
                  ref={newRef}
                  onFocus={setFocusCallback}
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
