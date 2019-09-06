import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsuNavbar.css';
import classNames from 'classnames';

const navClass = classNames(styles.asuNavWrapper, this.props.className);

// todo: handle the keyboard navigation here



const AsuNavbar = (props) => {
  return (
    <nav className={navClass}>
        <div className={styles.asuNav} role="navigation" aria-label="ASU">
            {props.children}
        </div>
    </nav>
  )
};

AsuNavbar.propTypes = {
  children: PropTypes.node,
};

AsuNavbar.defaultProps = {
  
};

export default AsuNavbar;
