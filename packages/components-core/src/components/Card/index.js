import { h } from "preact";
import classNames from "classnames";
import PropTypes from "prop-types";

import { CardImage } from "../CardImage";
import { CardIcon } from "../CardIcon";
import { CardTitle } from "../CardTitle";
import { CardBody } from "../CardBody";
import { CardInfo } from "../CardInfo";
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
  displaySetting,
  dateTime,
  locationDisplay,
  buttons,
  tags,
}) => {
  const cardClass = classNames(UdsStyles["card"], {
    [UdsStyles[`card-${type}`]]: "default" !== type,
    [UdsStyles[`w-${width.replace("%", "")}`]]: "100%" !== width,
    [UdsStyles[`card-horizontal`]]: true === horizontal,
    [UdsStyles[`card-hover`]]: true === hover,
  });

  return (
    <div className={cardClass}>
      {image && <CardImage image={image} imageAltText={imageAltText} />}
      {icon && !image && <CardIcon icon={icon} />}
      {!horizontal ? (
        <>
          <CardTitle title={title} />
          <CardBody content={body} />
          <CardInfo
            displaySetting={displaySetting}
            dateTime={dateTime}
            locationDisplay={locationDisplay}
          />
          <CardButtons buttons={buttons} />
          <CardTags tags={tags} />
        </>
      ) : (
        <div className={UdsStyles["card-content-wrapper"]}>
          <CardTitle title={title} />
          <CardBody content={body} />
          <CardInfo
            displaySetting={displaySetting}
            dateTime={dateTime}
            locationDisplay={locationDisplay}
          />
          <CardButtons buttons={buttons} />
          <CardTags tags={tags} />
        </div>
      )}
    </div>
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
   * Card header image (optional)
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
   * Card info display setting
   */
  displaySetting: PropTypes.oneOf(["Stack", "Inline"]),
  /**
   * Date/time
   */
  dateTime: PropTypes.string,
  /**
   * Location display
   */
  locationDisplay: PropTypes.string,
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
  image: "https://picsum.photos/300/200",
  icon: "",
  title: "Default title",
  body:
    "Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempo.",
  displaySetting: "Inline",
  dateTime: "Wednesday, November 21st, 2021 11:30 a.m. - 12:30 p.m.",
  locationDisplay: "Downtown Phoenix Campus",
  buttons: ["Google label", "Microsoft label"],
  tags: ["tag one", "tag two", "tag three", "tag four"],
};
