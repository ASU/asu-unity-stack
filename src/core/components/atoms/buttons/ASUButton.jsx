import React from "react";


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

export default ASUButton;
