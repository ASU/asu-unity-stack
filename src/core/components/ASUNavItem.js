import React, { Component } from "react";
import ASULink from './ASULink';
import styles from '../styles/ASU.css';

const ASUNavItem = props => {

    const classes = styles.asuNavItem + (props.classes ? ' ' +  props.classes : '');

    return (
        <li className={classes}>
            <ASULink href={props.href} target={props.target}>{props.text}</ASULink>
            {props.children}
        </li>
    );
};

export default ASUNavItem;