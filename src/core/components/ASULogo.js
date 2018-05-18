import React, { Component } from "react";
import ASUImage from "./ASUImage"
import styles from "../styles/ASU.css"

const ASULogo = props => {

    return (
        <div className={styles.asu_logo}>
            <a href={props.href} target={props.target}>
                <ASUImage alt={props.alt} src={props.src} />
            </a>
        </div>
    );
};

export default ASULogo;