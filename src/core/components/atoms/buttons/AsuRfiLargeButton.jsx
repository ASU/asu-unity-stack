import React, { Component } from "react";
import styles from "./AsuButtons.css";

const AsuRfiLargeButton = props => {
    return (
      <div>
        <button {...props}>
          {props.btnText}
            {props.children}
        </button>
      </div>
    );
};

export default AsuRfiLargeButton;
