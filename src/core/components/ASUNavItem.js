import React, { Component } from "react";
import ASULink from './ASULink'

const ASUNavItem = props => {

    return (
        <li {...(props.classes ? {className: props.classes} : {})}>
            <ASULink href={props.href} target={props.target}>{props.text}</ASULink>
            {props.children}
        </li>
    );
};

export default ASUNavItem;