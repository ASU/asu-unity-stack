import { createComponent, createStory } from "../../../helpers/wrapper.js";
import { googleAnalytics as initFunc } from "@asu/unity-bootstrap-theme/js/data-layer.js";
import { Button } from "../../../../components-core/src/components/Button";
import anonPic from "./anon.png";

const extraOptions = {
  size: {
    name: "Size",
    options: ["small", null],
    defaultValue: null,
    control: {
      type: "radio",
      labels: {
        "small": "Small",
        null: "Large",
      },
    },
  },
  fill: {
    name: "Fill",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default createComponent(
  "Person Profile",
  "Molecules",
  "Templates",
  extraOptions
);

const PersonProfile = props => (
  <div
    className={`uds-person-profile ${props.size} ${props.fill ? "fill" : ""}`}
  >
    <div className="profile-img-container">
      <div
        className="profile-img-placeholder"
        style={{ backgroundImage: `url(${anonPic})` }}
      >
        <img
          className="profile-img"
          src="https://source.unsplash.com/WLUHO9A_xik/300x300"
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
      {props.size !== "micro" && (
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
      {!["micro", "small"].includes(props.size) && (
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
      {props.size === "small" && (
        <Button color="maroon" size="small" label="View Profile" />
      )}
      {props.size === "micro" && <span className="more-link">Edplus at ASU</span>}
    </div>
  </div>
);

export const PersonProfileTemplate = createStory(PersonProfile, { initFunc });
PersonProfileTemplate.args = {
  template: 1,
};
