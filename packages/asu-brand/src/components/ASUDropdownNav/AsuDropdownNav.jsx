import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AsuDropdownNav.css";
import classNames from "classnames";
import Fragment from ""

const AsuDropdownNav = props => {
  const navClass = styles.asuNavItemTop;
  const [open, setOpen] = useState(false);
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
    <div role="navigation" className={navClass}>
      <a className={styles.asuNavA} href={props.href} target={props.target}>
        {props.title}
      </a>
      {props.items ? (
        <React.Fragment>
          <span
            className={open ? styles.icoSortUp : styles.icoSortDown}
            onClick={() => {
              setOpen(!open);
            }}
          ></span>

          <ul className={subStyles}>
            {props.items.map((item, index) => {
              return (
                <li className={styles.asuNavItem} key={index}>
                  <a href={item.href} ref={linkRefs[index]} tabIndex="0">
                    {item.value}
                  </a>
                </li>
              );
            })}
          </ul>

        </React.Fragment>
      ) : (
        ""
      )}

    </div>
  );
};

AsuDropdownNav.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  href: PropTypes.string,
  target: PropTypes.string
};

AsuDropdownNav.defaultProps = {
  title: "test"
};

export default AsuDropdownNav;
