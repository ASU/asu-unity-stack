import { h } from "preact";
import PropTypes from "prop-types";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardTitle = ({ title }) => (
  <div className={UdsStyles["card-header"]}>
    <h3 className={UdsStyles["card-title"]}>{title}</h3>
  </div>
);

CardTitle.propTypes = {
  /**
   * Card title
   */
  title: PropTypes.string.isRequired,
};
