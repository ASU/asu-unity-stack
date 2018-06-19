import React, { Component } from "react";
import ASUNavItem from './ASUNavItem';
import ASULogin from './ASULogin';
import defaultNav from "./ASUNavDefaultTree";
import PropTypes from 'prop-types';
import styles from '../styles/ASU.css';

const ASUNav = props => {

    const navMenu = renderNav(props.navTree);
    let login = null;
    let children = [];

    // extract the login if passed as a child. The login link will
    // be rendered inline with the navmenu per the brand standards
    if (props.children) {
        for (let i = 0; i < props.children.length; i++) {
            const child = props.children[i];

            if (child.type === ASULogin) {
                login = child;
            } else {
                children.push(child);
            }
        }
    }

    return (
        <div className={styles.asuNavWrapper}>
            <div className={styles.asuNav} role="navigation" aria-label="ASU">
                {navMenu}
                {login !== null ? login : ''}
            </div>
            {children.length > 0 ? children : ''}
        </div>
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
    navTree: PropTypes.arrayOf(PropTypes.object)
};

// Specifies the default values for props:
ASUNav.defaultProps = {
    navTree: defaultNav
};


export default ASUNav;