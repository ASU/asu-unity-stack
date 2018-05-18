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
    nav.map((item, index) => renderItem(item, index))
);

const renderItem = (item, index) => {

    const children = item.children ? renderNav(item.children) : '';

    return (
        <li key={index}>
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