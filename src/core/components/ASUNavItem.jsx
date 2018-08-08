import React from "react";
import ASULink from './ASULink';
import styles from '../styles/ASU.css';
import ASULogo from "./ASULogo";
import PropTypes from 'prop-types';

const ASUNavItem = props => {

    const classes = styles.asuNavItem + (props.classes ? ' ' +  props.classes : '');

    return (
        <li className={classes}>
            <ASULink href={props.href} target={props.target}>{props.text}</ASULink>
            {props.children}
        </li>
    );
};

ASUNavItem.propTypes = {
    classes: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node
};

// Specifies the default values for props:
ASUNavItem.defaultProps = {
    logo: ASULogo.defaultProps
};

export default ASUNavItem;