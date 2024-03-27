import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";
import cardsImage from "./cards-image.jpg";

export default {
  title: "Molecules/Cards/Templates",
  decorators: [ defaultDecorator ],
  argTypes: {
    cardHeader: {
      name: "Header ",
      options: ["none", "image", "icon"],
      control: {
        type: "radio",
        labels: {
          none: "None",
          image: "Image",
          icon: "Icon",
        },
      },
    },
    event: {
      name: "Event Details",
      control: { type: "boolean" },
    },
    link: {
      name: "Link",
      control: { type: "boolean" },
    },
    tags: {
      name: "Tags",
      control: { type: "boolean" },
    },
    numButtons: {
      name: "Number Of Buttons",
      options: [0, 1, 2],
      control: {
        type: "radio",
      },
    },
  },
  args: {
    cardHeader: "none",
    event: false,
    link: false,
    tags: false,
    numButtons: 0,
  },
};

export const cardNoTemplates = args => {
  return (
    <div className="card">
      {args.cardHeader === "icon" && (
        <span
          className="far fa-calendar fa-2x card-icon-top"
          title="Calendar Icon"
        />
      )}
      {args.cardHeader === "image" && (
        <img
          className="card-img-top"
          src={cardsImage}
          alt="Card image cap"
          width="600"
          height="337"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
      )}
      <div className="card-header pt-2">
        <h3>Heading</h3>
      </div>
      <div className="card-body">
        <p className="card-text">
          Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua eiusmod tempo.
        </p>
      </div>
      {args.event && (
        <div className="card-event-details">
          <div className="card-event-icons">
            <div>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>Downtown Phoenix campus</div>
          </div>
        </div>
      )}
      {args.numButtons > 0 && (
        <div className="card-buttons">
          <div className="card-button">
            <a
              href="#"
              className="btn btn-dark"
              data-ga="Button link here"
              data-ga-name="onclick"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="heading"
            >
              Button link here
            </a>
          </div>
          {args.numButtons === 2 && (
            <div className="card-button">
              <a
                href="#"
                className="btn btn-md btn-dark"
                data-ga="Button link here"
                data-ga-name="onclick"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-type="internal link"
                data-ga-region="main content"
                data-ga-section="heading"
              >
                Button link here
              </a>
            </div>
          )}
        </div>
      )}
      {args.link && (
        <div className="card-link">
          <a
            href="#"
            className=""
            data-ga="Regular text link here"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-section="heading"
          >
            Regular text link here
          </a>
        </div>
      )}
      {args.tags && (
        <div className="card-tags">
          <a className="btn btn-tag btn-tag-alt-white" href="#">
            test tag
          </a>
          <a className="btn btn-tag btn-tag-alt-white" href="#">
            test tag 2
          </a>
          <a className="btn btn-tag btn-tag-alt-white" href="#">
            test tag 3
          </a>
        </div>
      )}
    </div>
  );
};
