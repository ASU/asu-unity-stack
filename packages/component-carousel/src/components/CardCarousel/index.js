// @ts-check
import { Card } from "@asu-design-system/components-core/src/components/Card";
import PropTypes from "prop-types";
import React from "react";

import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {import('../../core/types/card-carousel-types').CardItem} CardItem
 */

/**
 * @typedef {import('../../core/types/card-carousel-types').CardCarouselType} CardCarouselType
 */

/**
 * @param {CardItem} props
 * @param {string} cardType
 * @param {"stack" | "inline"} cardEventFormat
 * @param {boolean} cardHorizontal
 * @returns {CarouselItem}
 * @ignore
 */
const htmlTemplate = (
  {
    id,
    imageSource,
    imageAltText,
    title,
    content,
    eventLocation,
    eventTime,
    buttons,
    linkLabel,
    linkUrl,
    tags,
  },
  cardType,
  cardHorizontal,
  cardEventFormat
) => ({
  id,
  item: (
    <Card
      type={cardType}
      horizontal={cardHorizontal}
      image={imageSource}
      imageAltText={imageAltText}
      title={title}
      body={content}
      eventFormat={cardEventFormat}
      eventLocation={eventLocation}
      eventTime={eventTime}
      buttons={buttons}
      linkLabel={linkLabel}
      linkUrl={linkUrl}
      tags={tags}
    />
  ),
});

/**
 * @param {CardCarouselType} props
 * @returns { JSX.Element }
 */
const CardCarousel = ({
  perView,
  cardItems,
  cardType = "default",
  cardEventFormat = "stack",
  cardHorizontal = false,
  width = undefined,
  maxWidth = undefined,
  imageAutoSize = true,
}) => {
  const carouselItems = cardItems.map(item =>
    htmlTemplate(item, cardType, cardHorizontal, cardEventFormat)
  );
  const activateGlideActions = cardItems.length > perView;

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="aligned-carousel"
      imageAutoSize={imageAutoSize}
      removeSideBackground={cardItems.length <= perView}
      hasPositionIndicators={activateGlideActions}
      hasNavButtons={activateGlideActions}
      isDraggable={activateGlideActions}
      hasShadow
    />
  );
};

CardCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      eventLocation: PropTypes.string,
      eventTime: PropTypes.string,
      image: PropTypes.string,
      imageAltText: PropTypes.string,
      buttons: Card.propTypes.buttons,
      linkLabel: PropTypes.string,
      linkUrl: PropTypes.string,
      tags: Card.propTypes.tags,
    })
  ).isRequired,
  cardType: Card.propTypes.type,
  cardEventFormat: Card.propTypes.eventFormat,
  cardHorizontal: Card.propTypes.horizontal,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { CardCarousel };
