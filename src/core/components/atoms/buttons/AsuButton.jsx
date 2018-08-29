import React, { Component } from "react";
import styles from "./buttons.css";

const AsuButton = props => {
    return (
      <div>
        <button {...props}>
          { props.label }
          { props.children }
        </button>
      </div>
    );
};

export default AsuButton;
