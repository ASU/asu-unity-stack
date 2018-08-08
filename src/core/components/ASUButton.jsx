import React from "react";
import PropTypes from 'prop-types';


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