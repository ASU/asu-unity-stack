import React, { useState } from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
import styles from "./AsuDropdownNav.css";
import classNames from "./node_modules/classnames";

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
    <div title={props.title ? props.title : props.text} role="navigation" className={navClass}>
      <a className={styles.asuNavA} href={props.href} target={props.target}>
        {props.text}
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
                  <a title={item.title} href={item.href} ref={linkRefs[index]} tabIndex="0">
                    {item.text}
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
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  href: PropTypes.string.isRequired,
  target: PropTypes.string
};

AsuDropdownNav.defaultProps = {
};

export default AsuDropdownNav;
