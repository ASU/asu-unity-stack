import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics';
import { Button } from "../../../../components-core/src/components/Button";
import anonPic from "./anon.png";

const extraOptions = {
  size: {
    name: 'Size',
    options: ['micro', 'small', ''],
    defaultValue: '',
    control: {
      type: 'radio',
      labels: {
        'micro': 'Micro',
        'small': 'Small',
        '': 'Large',
      },
    },
  },
  fill: {
    name: 'Fill',
    control: { type: 'boolean' },
    defaultValue: false,
  },
};

export default createComponent('Person Profile', 'Molecules', 'Templates', extraOptions);

const PersonProfile = props => (
  <div className={`uds-person-profile ${props.size} ${props.fill ? 'fill' : ''}`}>
    <div className="profile-img-container">
      <div className="profile-img-placeholder" style={{ backgroundImage: `url(${anonPic})` }}>
        <img
          className="profile-img"
          src="https://source.unsplash.com/WLUHO9A_xik/300x300"
          alt="John Smith"
          onError={(e) => e.target.style.display='none'}
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
          <span>Academic Associate</span>
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
          <a
            href="#"
            aria-label="See user address"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-name="onclick"
            data-ga-type="internal link"
            data-ga-region="main content"
            data-ga-section="john smith"
            data-ga="1234 Address St. Tempe AZ 12345"
          >
            <address className="person-address">
              <span className="person-street">1234 Address St.</span>
              <span className="person-city">Tempe AZ 12345</span>
            </address>
          </a>
        </li>
      </ul>
      )}
      {!["micro", "small"].includes(props.size) && (
      <div>
        <p className="person-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis, et
          dignissim nisi. In sed volutpat lectus. Lorem ipsum dolor sit amet.
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
              <span className="fab fa-twitter-square" />
            </a>
          </li>
        </ul>
      </div>
      )}
      {props.size === "small" && (
        <Button color="maroon" size="small" label="View Profile" />
      )}
      {props.size === "micro" && (
        <span class="more-link"><a href="/asu-knowledge-enterprise">ASU Knowledge Enterprise</a></span>
      )}
    </div>
  </div>
);

export const PersonProfileTemplate = createStory(PersonProfile, { initFunc })
PersonProfileTemplate.args = {
  template: 1,
};
