import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsuNav.css';


// todo: handle the keyboard navigation here
const AsuNav = (props) => {

  const navClass = styles.asuNavWrapper;

  return (
    <nav className={navClass}>
        <div className={styles.asuNav} role="navigation" aria-label="ASU">
            {props.children}
        </div>
    </nav>
  )
};

AsuNav.propTypes = {
  children: PropTypes.node,
};

AsuNav.defaultProps = {

};

export default AsuNav;
