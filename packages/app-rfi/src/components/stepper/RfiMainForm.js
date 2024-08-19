// @ts-check
import PropTypes from "prop-types";
import React from "react";

const RfiMainForm = ({ rfiImage, children }) => {
  return (
    <div className="container rfi-container-inner">
      <div className="row">
        <div className="col col-12 ">
          <div className="uds-image-text-block-container">
            <div className="uds-image-text-block-image-container">
              <img src={rfiImage} className="img-fluid" alt="" />
            </div>
            <div className="uds-image-text-block-text-container">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RfiMainForm.propTypes = {
  rfiImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { RfiMainForm };
