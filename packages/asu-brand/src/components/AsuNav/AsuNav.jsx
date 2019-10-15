import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsuNav.css';
import AsuDropdownNav from '../AsuDropdownNav';
import classnames from 'classnames';


// todo: handle the keyboard navigation here
const AsuNav = (props) => {

  const navClass = classnames(styles.asuNavWrapper, props.className);

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
  globalNav: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

AsuNav.defaultProps = {

};

export default AsuNav;
