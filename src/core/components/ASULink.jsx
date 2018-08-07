import React from "react";

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