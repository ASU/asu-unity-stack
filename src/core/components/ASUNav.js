import React, { Component } from "react";
import ASULogin from './ASULogin';
import ASULink from './ASULink'

const ASUNav = props => {

    const navMenu = renderNav(props.nav);

    return (
        <div id="asu_nav_wrapper">
            <ASULogin/>
            <div id="asu_nav_menu" role="navigation" aria-label="ASU">
                <div id="asu_universal_nav">
                    {navMenu}
                </div>
            </div>
        </div>
    );
};

const renderNav = nav => (
    nav.map(item => renderItem(item))
);

const renderItem = item => {

    const children = item.children ? renderNav(item.children) : '';

    return (
        <li key={item.href}>
            <ASULink {...item}/>
            {children &&
                <ul>
                    {children}
                </ul>
            }
        </li>
    );
};

export default ASUNav;