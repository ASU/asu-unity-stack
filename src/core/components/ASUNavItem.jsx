import React from "react";
import ASULink from './ASULink';
import styles from '../styles/ASU.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ASUNavItem = props => {

    const navClass = classNames(props.className, styles.asuNavItem);

    return (
        <li className={navClass}>
            <ASULink href={props.href} target={props.target}>{props.text}</ASULink>
            {props.children}
        </li>
    );
};

ASUNavItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node
};

export default ASUNavItem;