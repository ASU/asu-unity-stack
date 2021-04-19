// @ts-check

import { h } from "preact";
import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * This function creates a html template which render an image
 * @param {{ id: number, imageSource: string}} param0
 * @returns
 */
const template = ({ id, imageSource }) => ({
  id,
  item: (
    <img className="card-img-top" src={imageSource} alt="Card image cap"></img>
  ),
});

/**
 *
 * @param {{ perView: string, imageItems: {id: number, imageSource: string}[]}} props
 * @returns
 */
const ImageCarousel = ({ perView, imageItems }) => {
  const carouselItems = imageItems.map(template);

  return <BaseCarousel perView={perView} carouselItems={carouselItems} />;
};

export { ImageCarousel };
