import { h } from "preact";
import PropTypes from "prop-types";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardImage = ({ image, imageAltText }) => (
  <img className={UdsStyles["card-img-top"]} src={image} alt={imageAltText} />
);

CardImage.propTypes = {
  /**
   * Card header image
   */
  image: PropTypes.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAltText: PropTypes.string.isRequired,
};
