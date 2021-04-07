import { h } from "preact";
import PropTypes from "prop-types";

import { Button } from "../Button";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardButtons = ({ buttons }) => {
  return buttons.map(value => (
    <div className={UdsStyles["card-button"]}>
      <Button label={value} />
    </div>
  ));
};

CardButtons.propTypes = {
  /**
   * Array of button information
   */
  buttons: PropTypes.array.isRequired,
};
