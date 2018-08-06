import React, { Component } from "react";
import styles from "./AsuButtons.css";

const AsuButton = props => {
    return (
      <div>
        <button {...props}>
          {props.label}
          {props.children}
        </button>
      </div>
    );
};

export default AsuButton;
