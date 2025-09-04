// @ts-check

import { imageAny } from "@asu/shared";
import React from "react";

const img1 = imageAny(); // Placeholder for an example image
const img2 = imageAny(); // Placeholder for an example image
const img3 = imageAny(); // Placeholder for an example image
const img4 = imageAny(); // Placeholder for an example image

import { Image } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          "The image component is basically a wrapper for the `<img>` HTML element. It accepts some of the properties available for the native element, but only those that are necessary to function optimally. These properties are documented in the PropTypes object and you can see the specifications there. It is important to note that this component was specifically created for use within the UDS library and its React components, and should not be used directly outside of that context.",
      },
    },
  },
};

const Template = args => <Image {...args} />;

export const ImageWithNoCaption = Template.bind({});
ImageWithNoCaption.args = {
  src: img1,
  alt: "Placeholder image",
  border: true,
};

export const ImageWithNoCaptionBorderless = Template.bind({});
ImageWithNoCaptionBorderless.args = {
  src: img1,
  alt: "Placeholder image",
  border: false,
};

export const ImageWithCaption = Template.bind({});
ImageWithCaption.args = {
  src: img2,
  alt: "Placeholder image",
  caption: "This is a <a href='#'>caption</a>.",
  captionTitle: "Caption title",
  border: true,
};

export const ImageWithCaptionAndDropshadow = Template.bind({});
ImageWithCaptionAndDropshadow.args = {
  src: img3,
  alt: "Placeholder image",
  caption: "This is a <a href='#'>caption</a>.",
  captionTitle: "Caption title",
  dropShadow: true,
  border: true,
};

const GridTemplate = args => {
  return (
    <div
      style={{
        display: "grid",
        gap: "30px",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {[...Array(20)].map((_, idx) => {
        return <Image key={idx} {...args} />;
      })}
    </div>
  );
};

export const GridImages = GridTemplate.bind({});
GridImages.args = {
  alt: "Placeholder image",
  width: "100%",
  src: img4,
};

const MultipleImagesTemplate = args => <Image {...args} />;

export const TwoImagesAutoArrangement = MultipleImagesTemplate.bind({});
TwoImagesAutoArrangement.args = {
  images: [
    {
      src: img1,
      alt: "First image",
      border: true,
      caption: "Caption for first image",
      captionTitle: "First Image Title",
    },
    {
      src: img2,
      alt: "Second image", 
      border: true,
      caption: "Caption for second image",
      captionTitle: "Second Image Title",
      dropShadow: true,
    },
  ],
  columns: "0",
};

export const ThreeImagesArrangement = MultipleImagesTemplate.bind({});
ThreeImagesArrangement.args = {
  images: [
    {
      src: img1,
      alt: "First image",
      border: true,
      caption: "Caption for first image",
    },
    {
      src: img2,
      alt: "Second image",
      border: true,
      caption: "Caption for second image",
      dropShadow: true,
    },
    {
      src: img3,
      alt: "Third image",
      border: true,
      caption: "Caption for third image",
    },
  ],
  columns: "3",
};

export const FourImagesArrangement = MultipleImagesTemplate.bind({});
FourImagesArrangement.args = {
  images: [
    {
      src: img1,
      alt: "First image",
      border: true,
    },
    {
      src: img2,
      alt: "Second image",
      border: true,
      dropShadow: true,
    },
    {
      src: img3,
      alt: "Third image",
      border: true,
    },
    {
      src: img4,
      alt: "Fourth image",
      border: true,
    },
  ],
  columns: "4",
};
