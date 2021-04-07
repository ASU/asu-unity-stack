import { h } from "preact";
import classNames from "classnames";
import PropTypes from "prop-types";

import { CardImage } from "../CardImage";
import { CardIcon } from "../CardIcon";
import { CardTitle } from "../CardTitle";
import { CardBody } from "../CardBody";
import { CardEventInfo } from "../CardEventInfo";
import { CardButtons } from "../CardButtons";
import { CardTags } from "../CardTags";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const Card = ({
  type,
  width,
  horizontal,
  hover,
  image,
  imageAltText,
  icon,
  title,
  body,
  eventDisplay,
  startTime,
  stopTime,
  location,
  buttons,
  tags,
}) => {
  const cardClass = classNames(UdsStyles["card"], {
    [UdsStyles[`card-${type}`]]: "default" !== type,
    [UdsStyles[`w-${width.replace("%", "")}`]]: "100%" !== width,
    [UdsStyles[`card-horizontal`]]: true === horizontal,
    [UdsStyles[`card-hover`]]: true === hover,
  });

  const CardContent = (
    <>
      <CardTitle title={title} />
      <CardBody content={body} />
      <CardEventInfo
        display={eventDisplay}
        startTime={startTime}
        stopTime={stopTime}
        location={location}
      />
      <CardButtons buttons={buttons} />
      <CardTags tags={tags} />
    </>
  );

  return (
    <>
      <div className={cardClass}>
        {image && <CardImage image={image} imageAltText={imageAltText} />}
        {icon && !image && <CardIcon icon={icon} />}
        {!horizontal ? (
          CardContent
        ) : (
          <div className={UdsStyles["card-content-wrapper"]}>{CardContent}</div>
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  /**
   * Type of card
   */
  type: PropTypes.oneOf(["default", "event", "story", "degree"]),
  /**
   * Width of card
   */
  width: PropTypes.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: PropTypes.bool,
  /**
   * Enable hover
   */
  hover: PropTypes.bool,
  /**
   * Card header image
   */
  image: PropTypes.string,
  /**
   * Card header image alt text
   */
  imageAltText: PropTypes.string,
  /**
   * FontAwesome icon alternative to image (optional -- only valid for default cards)
   */
  icon: PropTypes.string,
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Body
   */
  body: PropTypes.string,
  /**
   * Event display setting
   */
  eventDisplay: PropTypes.oneOf(["Stack", "Inline"]),
  /**
   * Event start time
   */
  startTime: PropTypes.string,
  /**
   * Event stop time
   */
  stopTime: PropTypes.string,
  /**
   * Location
   */
  location: PropTypes.string,
  /**
   * Buttons
   */
  buttons: PropTypes.array,
  /**
   * Tags
   */
  tags: PropTypes.array,
};

Card.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: false,
  hover: false,
  image: null,
  imageAltText: null,
  icon: null,
  body: null,
  eventDisplay: "Stack",
  startTime: null,
  stopTime: null,
  location: null,
  buttons: [],
  tags: [],
};
