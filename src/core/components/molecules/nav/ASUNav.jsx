import React from 'react';
import ASUNavItem from './ASUNavItem';
import defaultNav from "./ASUNavDefaultTree";
import PropTypes from 'prop-types';
import styles from './nav.css';
import classNames from 'classnames';

const ASUNav = props => {

    const navMenu = renderNav(props.navTree);
    let childArray = [];
    const navClass = classNames(styles.asuNavWrapper, props.className);

    return (
        <nav className={navClass}>
            <div className={styles.asuNav} role="navigation" aria-label="ASU">
                {navMenu}
                {props.children}
            </div>
            {childArray.length > 0 ? childArray : ''}
        </nav>
    );
};

const renderNav = nav => {

    return (
        <ul className={styles.navList}>
            {
                nav.map((item, index) => {
                    return (
                        <ASUNavItem {...item} key={index}>
                            { item.subtree ? renderNav(item.subtree): null}
                        </ASUNavItem>
                    );
                })
            }
        </ul>
    );
};

ASUNav.propTypes = {
    navTree: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
    className: PropTypes.string
};

// Specifies the default values for props:
ASUNav.defaultProps = {
    navTree: defaultNav
};


export default ASUNav;