// @ts-check
/**
 *
 *
 * TODO: Does not work with Bootstrap Framework
 * Requires functionality UDS-1664
 *
 *
 */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Card } from "../../../Card/Card";
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
 * @param {"default" | "degree" | "event" | "news" | "story"} cardType
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
  // @ts-ignore
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
      linkUrl={linkUrl || buttons?.[0]?.href}
      tags={tags}
    />
  ),
});

/**
 * @param {CardCarouselType} props
 * @returns { JSX.Element }
 */
const CardCarousel = ({
  perView: perViewProp = 0,
  cardItems = [],
  cardType = "default",
  cardEventFormat = "stack",
  cardHorizontal = false,
  width = undefined,
  maxWidth = undefined,
  imageAutoSize = true,
}) => {
  const perView = parseInt(`${perViewProp}`, 10);
  const [currentPerView, setCurrentPerView] = useState(perView);

  const BREAKPOINT_LARGE = 1024;
  const BREAKPOINT_MEDIUM = 768;

  useEffect(() => {
    const updatePerView = () => {
      const screenWidth = window.innerWidth;
      let perViewValue;
      switch (perView) {
        case 3:
          if (screenWidth > BREAKPOINT_LARGE) {
            perViewValue = 3;
          } else if (screenWidth > BREAKPOINT_MEDIUM) {
            perViewValue = 2;
          } else {
            perViewValue = 1;
          }
          break;
        case 2:
          perViewValue = screenWidth < BREAKPOINT_MEDIUM ? 1 : 2;
          break;
        default:
          perViewValue = 1;
          break;
      }
      setCurrentPerView(perViewValue);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);

    return () => window.removeEventListener("resize", updatePerView);
  }, [perView]);

  const carouselItems = cardItems.map(item =>
    htmlTemplate(item, cardType, cardHorizontal, cardEventFormat)
  );
  const activateGlideActions = cardItems.length > currentPerView;

  return (
    <BaseCarousel
      perView={+currentPerView}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="aligned-carousel"
      imageAutoSize={imageAutoSize}
      removeSideBackground={cardItems.length <= currentPerView}
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
