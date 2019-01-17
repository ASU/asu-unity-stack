import React from "react";
import PropTypes from 'prop-types';


const ASUButton = props => {
    return (
      <div>
        <button {...props}>
          { props.label }
          { props.children }
        </button>
      </div>
    );
};

ASUButton.propTypes = {
    label: PropTypes.node,
    children: PropTypes.node
};

export default ASUButton;
