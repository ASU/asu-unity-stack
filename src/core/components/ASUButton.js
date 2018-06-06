import React, { Component } from "react";
import styles from "../styles/ASU.css"

const ASUButton = props => {

    return (
        <button {...props}>
            {props.children}
        </button>
    );
};

export default ASUButton;