import React, { Component } from "react";
import ASULogin from './ASULogin';
import ASUNavItem from './ASUNavItem';
import styles from '../styles/ASU.css';

const ASUNav = props => {

    const navMenu = renderNav(props.nav);

    return (
        <div className={styles.asu_nav_wrapper}>

            {props.children}
            <div className={styles.asu_nav_menu} role="navigation" aria-label="ASU">
                <div id="asu_universal_nav">
                    {navMenu}
                </div>
            </div>
        </div>
    );
};

const renderNav = nav => {

    return (
        <ul>
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