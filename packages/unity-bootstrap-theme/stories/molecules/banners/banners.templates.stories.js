import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../helpers/wrapper.js";
import { initBanner as initFunc } from "./banner";

const extraOptions = {
  color: {
    name: "Color",
    options: ["banner-orange", "banner-blue", "banner-gray", "banner-black"],
    defaultValue: "banner-orange",
    control: {
      type: "radio",
      labels: {
        "banner-orange": "Orange",
        "banner-blue": "Blue",
        "banner-gray": "Gray",
        "banner-black": "Black",
      },
    },
  },
};

export default createComponent(
  "Banners",
  "Molecules",
  "Templates",
  extraOptions
);

export const Banner = createStory(
  args => {
    return (
      <section className={`${args.color}`}>
        <div className="banner uds-content-align" role="banner">
          <div className="banner-icon">
            <span title="Banner" className="fa fa-icon fa-bell"></span>
          </div>
          <div className="banner-content">
            <h3>Stay up-to-date on what's new at ASU</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
            <a href="https://asunow.asu.edu/">read the latest updates here</a>.
          </div>
          <div className="banner-buttons">
            <a
              href="https://provost.asu.edu/sync/students"
              role="button"
              className="btn btn-sm btn-dark"
            >
              Info. on teaching and learning remotely
            </a>
            <a
              href="https://students.asu.edu/faq"
              role="button"
              className="btn btn-sm btn-dark"
            >
              FAQ Page
            </a>
          </div>
          <div className="banner-close">
            <button
              type="button"
              className="btn btn-circle btn-circle-alt-black close"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </section>
    );
  },
  {
    initFunc,
    supportedTemplates: [layoutNames.FULL_WIDTH],
  }
);
Banner.args = {
  template: 0,
  color: "banner-orange",
};
