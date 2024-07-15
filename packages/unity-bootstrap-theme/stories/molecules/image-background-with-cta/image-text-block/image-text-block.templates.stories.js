import React from "react";

import { imageName } from "../../../../../../shared/assets";
import { defaultDecorator } from "../../../../../../shared/components/Layout";

export default {
  title: "Molecules/Content Sections/Image And Text Block/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    right: {
      name: "Right",
      control: { type: "boolean" },
    },
    bgColor: {
      name: "Background Color",
      options: ["None", "gray-1-bg", "gray-2-bg", "gray-7-bg"],
      mapping: {
        "None": null,
      },
      control: {
        type: "radio",
      },
    },
    extraContent: {
      name: "Extra Content",
      control: { type: "boolean" },
    },
  },
  args: {
    right: false,
    bgColor: "None",
    extraContent: false,
  },
};

const ContentBlock = () => <p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
ab illo inventore veritatis et quasi architecto beatae vitae dicta
sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
</p>;

export const ImageLeftOrRight = ({right, bgColor, extraContent}) =>
  <div
    className={`uds-image-text-block-container ${
      right ? "uds-image-text-block-container-right" : ""
    }`}
  >
    <div className="uds-image-text-block-image-container">
      <img
        src={ imageName.cardsImage }
        className="img-fluid"
        alt="Random image. REPLACE with appropriate alt text for accessibility."
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      ></img>
    </div>
    <div className={`uds-image-text-block-text-container ${bgColor}`}>
      <h3>This is a heading</h3>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      <ContentBlock/>
      {
        extraContent && <>
        <ContentBlock/>
        <ContentBlock/>
        </>
      }
      <div className="uds-buttons py-1">
        <a
          href="#"
          className={`btn ${
            bgColor === "gray-7-bg" ? "btn-gold" : "btn-dark"
          }`}
        >
          Button link here
        </a>
        <a
          href="#"
          className={`btn ${
            bgColor === "gray-7-bg" ? "btn-gold" : "btn-dark"
          }`}
        >
          Button link here
        </a>
      </div>
    </div>
  </div>
;
