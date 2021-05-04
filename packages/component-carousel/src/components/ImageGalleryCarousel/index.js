// @ts-check
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import PropTypes from "prop-types";

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
 *     content?: any
 * }} ImageCarouselItem
 */

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
  /**
   *
   * @param {{ instanceName: string }} props
   * @returns { JSX.Element }
   */
  const CustomNavComponent = ({ instanceName }) => {
    const [content, setContent] = useState(imageItems[0].content);

    useEffect(() => {
      const currentSlider = document.querySelector(`#${instanceName}`);
      const observer = new MutationObserver(mCallback);
      const ATTR_INDEX = "data-current-index";

      function mCallback(mutations) {
        for (let mutation of mutations) {
          if (mutation && mutation.attributeName === ATTR_INDEX) {
            onItemClick(+currentSlider.getAttribute(ATTR_INDEX));
          }
        }
      }

      observer.observe(currentSlider, {
        attributes: true,
      });
    }, [instanceName]);

    const onItemClick = currentIndex => {
      const item = imageItems[currentIndex];
      setContent(item.content);
    };

    let bulletItems = imageItems.map(item => item.imageSource);

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
          <figcaption
            id="caption"
            className="figure-caption uds-figure-caption"
          >
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

  return (
    <BaseCarousel
      perView={1}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="image-gallery"
      role="figure"
      ariaLabelledBy={hasContent ? "caption" : null}
      isFullWidth={true}
      imageAutoSize={imageAutoSize}
      // @ts-ignore
      CustomNavComponent={props => <CustomNavComponent {...props} />}
    />
  );
};

ImageGalleryCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  imageItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  hasContent: PropTypes.bool,
  imageAutoSize: PropTypes.bool,
};

export { ImageGalleryCarousel };
