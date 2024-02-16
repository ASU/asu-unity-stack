import { createComponent, createStory } from "../../../helpers/wrapper.js";
export default {
  title: "Molecules/Content Sections/Image Background With Call To Action/Templates",
};

export const Default = createStory(
  <section
    className="uds-image-background-with-cta"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('https://source.unsplash.com/WLUHO9A_xik/1920x1200')",
    }}
  >
    <div className="uds-image-background-with-cta-container uds-content-align">
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <button className="btn btn-gold">Default button</button>
    </div>
  </section>
);
Default.args = {
  template: 1,
};
