import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Util } from "reactstrap";
import bootstrap from "@asu-design-system/bootstrap4-theme/dist/css/bootstrap-asu.min.css";
import styles from "./AsuBgHeroImage.css";
import { heroTitle, heroButtons } from "../AsuHeroImage";

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);

/** Background hero image implementation */
const AsuBgHeroImage = props => {
  const bgStyles = {
    color: "#FFFFFF",
    backgroundImage: "url(" + props.src + ")",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "100vh",
    maxHeight: parseInt(props.maxHeight) + "px",
  };

  const buttons = props.buttons ? heroButtons(props.buttons) : "";
  const title = heroTitle(props.title, props.titleLink);

  return (
    <Jumbotron cssModule={bootstrap} fluid style={bgStyles}>
      <span className={bootstrap["sr-only"]}>{props.altText}</span>
      <div className={bootstrap.container}>
        {title}
        <p className={styles.heroP}>{props.tagline}</p>
        {buttons}
      </div>
    </Jumbotron>
  );
};

AsuBgHeroImage.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
};

AsuBgHeroImage.defaultProps = {
  maxHeight: 380,
};

export default AsuBgHeroImage;
