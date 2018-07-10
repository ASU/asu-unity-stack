import React, { Component } from "react";
import ASUImage from "./ASUImage"
import PropTypes from 'prop-types';
import styles from "../styles/ASU.css"

const ASULogo = props => {
    return (
        <div className={styles.asuLogo}>
            <a href={props.href} target={props.target}>
                <ASUImage alt={props.alt} src={props.src} />
            </a>
        </div>
    );
};

ASULogo.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string
};

// Specifies the default values for props:
ASULogo.defaultProps = {
    href: '/',
    target: '_top',
    alt: 'A S U',
    src: "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png"
};

export default ASULogo;