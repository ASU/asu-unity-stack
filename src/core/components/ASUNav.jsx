import React from 'react';
import ASUNavItem from './ASUNavItem';
import ASULogin from './ASULogin';
import defaultNav from "./ASUNavDefaultTree";
import PropTypes from 'prop-types';
import styles from '../styles/ASU.css';

const ASUNav = props => {

    const navMenu = renderNav(props.navTree);
    const children = props.children;
    let login = null;
    let childArray = [];

    // extract the login if passed as a child. The login link will
    // be rendered inline with the navmenu per the brand standards
    React.Children.forEach(children, (child) => {
        if (child.type === ASULogin) {
            login = child;
        } else {
            childArray.push(child);
        }
    });

    return (
        <nav className={styles.asuNavWrapper}>
            <div className={styles.asuNav} role="navigation" aria-label="ASU">
                {navMenu}
                {login !== null ? login : ''}
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
    children: PropTypes.node
};

// Specifies the default values for props:
ASUNav.defaultProps = {
    navTree: defaultNav
};


export default ASUNav;