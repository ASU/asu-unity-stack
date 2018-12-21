import React from "react";
import PropTypes from 'prop-types';

const ASUImage = props => {
    return (
        <img alt={props.alt} src={props.src} />
    );
};

ASUImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default ASUImage;
