import { imageArray } from "./../../../../shared/assets";
import { testimonialWithImage } from "../../src/components/ComponentCarousel/components/TestimonialCarousel/examples";

const getImageFormat = index => imageArray[index];

const cardCarouselItems = [];
for (let index = 0; index < 8; index += 1) {
  const content =
    index === 3
      ? "Only two lines of text here, to show our fixed height."
      : `Body ${index + 1}
    copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua eiusmod tempo.`;

  const imageSource = index === 5 ? "https://br0ken" : getImageFormat(index);
  const imageAltText =
    index === 5
      ? "Intentionally broken image. Broken images look like this!"
      : "Card image cap";

  cardCarouselItems.push({
    id: index,
    imageSource,
    imageAltText,
    title: `Card ${index + 1}`,
    content,
    buttons: [
      {
        ariaLabel: "dummy button",
        color: "maroon",
        href: "#",
        label: `Button ${index + 1} link here`,
        size: "default",
        onClick: () => {
          // eslint-disable-next-line no-alert
          window.alert("Hola Amigo 😃.");
          return false;
        },
      },
    ],
  });
}

const imageCarouselItems = [
  {
    id: 1,
    imageSource: imageArray[1],
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 2,
    imageSource: imageArray[2],
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 3,
    imageSource: imageArray[3],
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 4,
    imageSource: imageArray[4],
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 5,
    imageSource: imageArray[5],
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
];

const imageGalleryCarouselItems = [];
for (let index = 0; index < 8; index += 1) {
  imageGalleryCarouselItems.push({
    id: index,
    imageSource: imageArray[index],
    imageAltText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  });
}

const cardCarouselProps = { perView: 3, cardItems: cardCarouselItems };

const imageCarouselProps = { perView: 1, imageItems: imageCarouselItems };

const imageGalleryCarouselProps = { imageItems: imageGalleryCarouselItems };

const testimonialCarouselProps = {
  hasNavButtons: true,
  hasPositionIndicators: true,
  testimonialItems: testimonialWithImage,
};

export {
  cardCarouselItems,
  imageCarouselItems,
  imageGalleryCarouselItems,
  cardCarouselProps,
  imageCarouselProps,
  imageGalleryCarouselProps,
  testimonialCarouselProps,
};
