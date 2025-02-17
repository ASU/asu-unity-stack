// @ts-check
import React from "react";

// @ts-ignore
import img1 from "../../../../../shared/assets/img/named/img001.jpg";
// @ts-ignore
import img2 from "../../../../../shared/assets/img/named/img002.jpg";
// @ts-ignore
import img3 from "../../../../../shared/assets/img/named/img003.jpg";
// @ts-ignore
import img4 from "../../../../../shared/assets/img/named/img004.jpg";
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
        // eslint-disable-next-line react/no-array-index-key
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
