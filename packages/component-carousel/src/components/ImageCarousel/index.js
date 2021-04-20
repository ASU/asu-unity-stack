// @ts-check

import { h } from "preact";
import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * This function creates a html template which render an image
 * @param {{
 *          id: number
 *          imageSource: string
 *          altText:string
 *          content?: string | h.JSX.Element
 *        }} param0
 * @returns
 */
const imageTemplate = ({ id, imageSource, altText, content }) => ({
  id,
  item: (
    <div class="uds-img">
      <figure class="figure uds-figure">
        <img
          src={imageSource}
          class="uds-img figure-img img-fluid"
          alt={altText}
        />
        {content && (
          <figcaption class="figure-caption uds-figure-caption">
            {typeof content === "string" ? (
              <span class="uds-caption-text">{content}</span>
            ) : (
              content
            )}
          </figcaption>
        )}
      </figure>
    </div>
  ),
});

/**
 *
 * @param {{
 *            perView: string | number
 *            maxWidth?: string
 *            width?: string
 *            imageItems: { id: number, imageSource: string, altText:string }[]
 *        }} props
 * @returns
 */
const ImageCarousel = ({ perView, width, maxWidth, imageItems }) => {
  const carouselItems = imageItems.map(imageTemplate);

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
    />
  );
};

export { ImageCarousel };
