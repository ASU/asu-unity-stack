import { h } from "preact";
import PropTypes from "prop-types";

import { Button } from "../Button";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardTags = ({ tags }) => {
  return (
    <div className={UdsStyles["card-tags"]}>
      {tags.map(value => (
        <Button key={value} label={value} btnSize="tag" />
      ))}
    </div>
  );
};

CardTags.propTypes = {
  /**
   * Array of button information
   */
  tags: PropTypes.array.isRequired,
};
