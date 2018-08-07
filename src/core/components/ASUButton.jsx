import React from "react";
import PropTypes from 'prop-types';
import ASUHeader from "./ASUHeader";
import ASULogo from "./ASULogo";


const ASUButton = props => {

    return (
        <button {...props}>
            {props.children}
        </button>
    );
};

ASUButton.propTypes = {
    children: PropTypes.node
};


export default ASUButton;