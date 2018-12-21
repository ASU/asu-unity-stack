import React from "react";
import PropTypes from 'prop-types';

const ASULink = props => {
    return (
        <a {...props}>
            {props.children}
        </a>
    );
};

ASULink.propTypes = {
    children: PropTypes.node
};

export default ASULink;