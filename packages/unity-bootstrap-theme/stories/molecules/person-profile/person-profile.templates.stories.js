import React from "react";

import { imageName } from "../../../../../shared/assets";
import { defaultDecorator } from "../../../../../shared/components/Layout";
import { Button } from "../../../../components-core/src/components/Button";
import anonPic from "./anon.png";

export default {
  title: "Molecules/Person Profile/Templates",
  decorators: [ defaultDecorator ],
  argTypes:  {
    size: {
      name: "Size",
      options: ["Small", "Large"],
      mapping: {
        "Small": "small",
        "Large": "",
      },
      control: {
        type: "radio",
      },
    },
    fill: {
      name: "Fill",
      control: { type: "boolean" },
    },
  },
  args: {
    size: "Large",
    fill: false,
  },
};

const PersonProfile = ({size, fill}) => (
  <div
    className={`uds-person-profile ${size} ${fill ? "fill" : ""}`}
  >
    <div className="profile-img-container">
      <div
        className="profile-img-placeholder"
        style={{ backgroundImage: `url(${anonPic})` }}
      >
        <img
          className="profile-img"
          src={ imageName.demo1 }
          alt="John Smith"
          width="300"
          height="300"
          decoding="async"
          loading="lazy"
          fetchpriority="high"
          onError={e => (e.target.style.display = "none")}
        />
      </div>
    </div>
    <div className="person">
      <h3 className="person-name">John Smith</h3>
      <div className="person-profession">
        <h4>
          <span>Regents Professor</span>
        </h4>
        <h4>
          <span>Edplus at ASU</span>
        </h4>
      </div>
      {size !== "micro" && (
        <ul className="person-contact-info">
          <li>
            <a
              href="mailto:email@asu.edu"
              aria-label="Email user"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-name="onclick"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="john smith"
              data-ga="email@asu.edu"
            >
              email@asu.edu
            </a>
          </li>
          <li>
            <a
              href="tel:555-555-5555"
              aria-label="Call user"
              data-ga-event="link"
              data-ga-action="click"
              data-ga-name="onclick"
              data-ga-type="internal link"
              data-ga-region="main content"
              data-ga-section="john smith"
              data-ga="555-555-5555"
            >
              555-555-5555
            </a>
          </li>
          <li>
            <address className="person-address">
              <span className="person-street">1234 Address St.</span>
              <span className="person-city">Tempe AZ 12345</span>
            </address>
          </li>
        </ul>
      )}
      {!["micro", "small"].includes(size) && (
        <div>
          <p className="person-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis,
            et dignissim nisi. In sed volutpat lectus. Lorem ipsum dolor sit
            amet.
          </p>
          <ul className="person-social-medias">
            <li>
              <a
                href="#"
                aria-label="Go to user Facebook profile"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-name="onclick"
                data-ga-type="external link"
                data-ga-region="main content"
                data-ga-section="john smith"
                data-ga="facebook icon"
              >
                <span className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Go to user Linkedin profile"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-name="onclick"
                data-ga-type="external link"
                data-ga-region="main content"
                data-ga-section="john smith"
                data-ga="linkedin icon"
              >
                <span className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Go to user Twitter profile"
                data-ga-event="link"
                data-ga-action="click"
                data-ga-name="onclick"
                data-ga-type="external link"
                data-ga-region="main content"
                data-ga-section="john smith"
                data-ga="twitter icon"
              >
                <span className="fab fa-square-x-twitter" />
              </a>
            </li>
          </ul>
        </div>
      )}
      {size === "small" && (
        <Button color="maroon" size="small" label="View Profile" />
      )}
      {size === "micro" && <span className="more-link">Edplus at ASU</span>}
    </div>
  </div>
);

export const PersonProfileTemplate = PersonProfile.bind({});
