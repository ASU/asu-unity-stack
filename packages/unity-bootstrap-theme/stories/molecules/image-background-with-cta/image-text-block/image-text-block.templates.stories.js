import { createComponent, createStory } from "../../../../helpers/wrapper.js";

const ContentBlock = () => <p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
ab illo inventore veritatis et quasi architecto beatae vitae dicta
sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
</p>;

const extraOptions = {
  right: {
    name: "Right",
    control: { type: "boolean" },
    defaultValue: false,
  },
  bgColor: {
    name: "Background Color",
    options: [null, "gray-1-bg", "gray-2-bg", "gray-7-bg"],
    defaultValue: null,
    control: {
      type: "radio",
      labels: {
        null: "None",
        "gray-1-bg": "gray-1-bg",
        "gray-2-bg": "gray-2-bg",
        "gray-7-bg": "gray-7-bg",
      },
    },
  },
  extraContent: {
    name: "Extra Content",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default {
  title: "Molecules/Content Sections/Image And Text Block/Templates",
  argTypes: extraOptions,
};

export const ImageLeftOrRight = createStory(args => {
  return (
    <div
      className={`uds-image-text-block-container ${
        args.right ? "uds-image-text-block-container-right" : ""
      }`}
    >
      <div className="uds-image-text-block-image-container">
        <img
          src="https://source.unsplash.com/WLUHO9A_xik/1200x750"
          className="img-fluid"
          alt="Random image. REPLACE with appropriate alt text for accessibility."
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        ></img>
      </div>
      <div className={`uds-image-text-block-text-container ${args.bgColor}`}>
        <h3>This is a heading</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <ContentBlock/>
        {
          args.extraContent && <>
          <ContentBlock/>
          <ContentBlock/>
          </>
        }
        <div className="uds-buttons py-1">
          <a
            href="#"
            className={`btn ${
              args.bgColor === "gray-7-bg" ? "btn-gold" : "btn-dark"
            }`}
          >
            Button link here
          </a>
          <a
            href="#"
            className={`btn ${
              args.bgColor === "gray-7-bg" ? "btn-gold" : "btn-dark"
            }`}
          >
            Button link here
          </a>
        </div>
      </div>
    </div>
  );
});
ImageLeftOrRight.args = {
  template: 1,
};
