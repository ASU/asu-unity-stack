import { h } from "preact";
import PropTypes from "prop-types";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardBody = ({ content }) => (
  <div className={UdsStyles["card-body"]}>
    <p className={UdsStyles["card-text"]}>{content}</p>
  </div>
);

CardBody.propTypes = {
  /**
   * Card body content
   */
  content: PropTypes.string.isRequired,
};
