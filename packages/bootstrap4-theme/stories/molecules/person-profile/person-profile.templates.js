import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js';
export default createComponent('Person Profile', 'Molecules', 'Templates');
import { googleAnalytics as initFunc } from '../../../src/js/googleAnalytics';

export const PersonProfile = createStory(
  <div class="uds-person-profile">
    <img
      class="profile-img"
      src="https://source.unsplash.com/WLUHO9A_xik/300x300"
      alt="John Smith"
    />
    <div class="person">
      <h3 class="person-name">John Smith</h3>
      <h4 class="person-profession">Regents Professor</h4>
      <ul class="person-contact-info">
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
      <p class="person-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        ultrices nisl, at vestibulum tortor. Phasellus ut interdum turpis, et
        dignissim nisi. In sed volutpat lectus. Lorem ipsum dolor sit amet.
      </p>
      <ul class="person-social-medias">
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
            <span class="fab fa-facebook-square" />
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
            <span class="fab fa-linkedin" />
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
            <span class="fab fa-twitter-square" />
          </a>
        </li>
      </ul>
    </div>
  </div>,
  { initFunc }
);
PersonProfile.args = {
  template: 1,
};
