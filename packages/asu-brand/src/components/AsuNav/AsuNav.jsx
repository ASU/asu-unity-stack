import React from "react";
import PropTypes from "prop-types";
import styles from "./AsuNav.css";
import AsuDropdownNav from "../AsuDropdownNav";
import classnames from "classnames";
import AsuNavGlobalDefaults from "./AsuNavGlobalDefaults";

// todo: handle the keyboard navigation here
const AsuNav = props => {
  const navClass = classnames(styles.asuNavWrapper, props.className);

  return (
    <nav className={navClass}>
      <ul className={styles.asuNav} role="navigation" aria-label="ASU">
        {props.globalNav.map((item, index) => {
          return (
            <li key={index} className={styles.asuNavItemTop}>
              {item.items ? (
                <AsuDropdownNav {...item} />
              ) : (
                // if no child items, render as link
                <a
                  href={item.href}
                  title={item.title ? item.title : item.text}
                  target={item.target}
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
