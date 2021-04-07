import { h } from "preact";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardIcon = ({ icon }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", icon]}
        size="2x"
        className={UdsStyles["card-icon-top"]}
      />
    </>
  );
};

CardIcon.propTypes = {
  /**
   * FontAwesome icon name (for "fa-rocket", use "rocket")
   */
  icon: PropTypes.string.isRequired,
};
