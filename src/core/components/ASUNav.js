import React, { Component } from "react";
import ASULogin from './ASULogin';
import ASUNavItem from './ASUNavItem';
import styles from '../styles/ASU.css';

const ASUNav = props => {

    const navMenu = renderNav(props.nav);

    return (
        <div className={styles.asu_nav_wrapper}>
            {props.children}
            <div className={styles.asuNav} role="navigation" aria-label="ASU">
                {navMenu}
            </div>
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

export default ASUNav;