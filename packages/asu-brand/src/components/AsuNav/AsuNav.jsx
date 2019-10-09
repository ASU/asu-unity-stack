import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsuNav.css';
import AsuDropdownNav from '../ASUDropdownNav';


// todo: handle the keyboard navigation here
const AsuNav = (props) => {

  const navClass = styles.asuNavWrapper;

  return (
    <nav className={navClass}>
        <div className={styles.asuNav} role="navigation" aria-label="ASU">
          {props.globalNav.map((item, index) => {
              return (
                <AsuDropdownNav key={index} {...item}/>
              );
            })}
        </div>
    </nav>
  )
};

AsuNav.propTypes = {
  siteNav: PropTypes.arrayOf(PropTypes.object),
  globalNav: PropTypes.arrayOf(PropTypes.object)
};

AsuNav.defaultProps = {

};

export default AsuNav;
