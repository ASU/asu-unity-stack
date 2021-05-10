// @ts-check
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { BaseCarousel } from "../../core/components/BaseCarousel";
import {
  ImageBulletItems,
  PrevButton,
  NextButton,
  BaseNavButtonContainer,
} from "../../core/components/BaseCarousel/components";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {{
 *     id: number,
 *     imageSource: string,
 *     thumbnailSource?: string,
 *     altText:string
 *     content?: string
 * }} ImageCarouselItem
 */

const sharedProps = {
  imageItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageSource: PropTypes.string,
      thumbnailSource: PropTypes.string,
      altText: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
  hasContent: PropTypes.bool,
};

/**
 * This function creates a html template which render an image
 * @param {ImageCarouselItem} props
 * @returns {CarouselItem}
 */
const htmlTemplate = ({ id, imageSource, altText }) => ({
  id,
  item: (
    <div className="uds-img">
      <img
        src={imageSource}
        className="uds-img figure-img img-fluid"
        alt={altText}
      />
    </div>
  ),
});

/**
 *
 * @param {{
 * instanceName: string
 * imageItems: ImageCarouselItem []
 * hasContent: boolean
 * }} props
 * @returns { JSX.Element }
 */
// eslint-disable-next-line react/prop-types
const CustomNavComponent = ({ instanceName, imageItems, hasContent }) => {
  const ATTR_INDEX = "data-current-index";
  const [content, setContent] = useState(imageItems[0].content);

  const onItemClick = currentIndex => {
    const item = imageItems[currentIndex];
    setContent(item.content);
  };

  useEffect(() => {
    const currentSlider = document.querySelector(`#${instanceName}`);

    function onDataCurrentIndexChange(mutations) {
      // eslint-disable-next-line no-restricted-syntax
      for (const mutation of mutations) {
        if (mutation && mutation.attributeName === ATTR_INDEX) {
          return onItemClick(+currentSlider.getAttribute(ATTR_INDEX));
        }
      }
      return null;
    }

    const observer = new MutationObserver(onDataCurrentIndexChange);
    observer.observe(currentSlider, {
      attributes: true,
    });
  }, [instanceName]);

  useEffect(() => {
    const imgs = document.querySelectorAll(".image-navigator img");
    imgs.forEach(img =>
      img.addEventListener("click", e => e.stopPropagation())
    );
  }, []);

  const bulletItems = imageItems.map(item => item.imageSource);

  return (
    <div className="image-gallery-action-area" data-has-content={hasContent}>
      <div className="image-navigator">
        <BaseNavButtonContainer>
          <PrevButton />
          <ImageBulletItems
            imageItems={bulletItems}
            onItemClick={index => onItemClick(index)}
          />
          <NextButton />
        </BaseNavButtonContainer>
      </div>
      {hasContent ? (
        <figcaption id="caption" className="figure-caption uds-figure-caption">
          {typeof content === "string" ? (
            <span className="uds-caption-text">{content}</span>
          ) : (
            content
          )}
        </figcaption>
      ) : null}
    </div>
  );
};

CustomNavComponent.propTypes = {
  imageItems: sharedProps.imageItems,
  hasContent: sharedProps.hasContent,
};

/**
 *
 * @param {{
 *    maxWidth?: string
 *    width?: string
 *    hasContent?: boolean
 *    imageItems: ImageCarouselItem []
 *    imageAutoSize?: boolean
 *  }} props
 * @returns { JSX.Element }
 */
const ImageGalleryCarousel = ({
  width,
  maxWidth,
  imageItems,
  hasContent = false,
  imageAutoSize = true,
}) => {
  const carouselItems = imageItems.map(htmlTemplate);

  return (
    <BaseCarousel
      perView={1}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="image-gallery"
      role="figure"
      ariaLabelledBy={hasContent ? "caption" : null}
      isFullWidth
      imageAutoSize={imageAutoSize}
      // @ts-ignore
      CustomNavComponent={({ instanceName }) => (
        <CustomNavComponent
          instanceName={instanceName}
          hasContent={hasContent}
          imageItems={imageItems}
        />
      )}
    />
  );
};

ImageGalleryCarousel.propTypes = {
  imageItems: sharedProps.imageItems.isRequired,
  hasContent: sharedProps.hasContent,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
};

export { ImageGalleryCarousel };
