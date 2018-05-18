import React, { Component } from "react";

const ASULink = props => {
    return (
        <a {...props}>
            {props.children}
        </a>
    );
};

export default ASULink;