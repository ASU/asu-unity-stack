import React from 'react';

import { defaultDecorator } from "../../../../../shared/components/Layout";
import cardsImage from '../cards/cards-image.jpg';

export default {
  title: "Molecules/Image Based Card And Hover/Templates",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const ImageBasedCardsWithCTA = () => (
  <div className="content-section text-white">
    <div className="image-holder">
      <img src={cardsImage} alt="alt text" loading="lazy" decoding="async" />
    </div>
    <div className="content-holder">
      <div className="content-bg">
        <h3>Serving all learners at every stage of life</h3>
        <div className="hidden-details">
          <p className="long-text">
            As a comprehensive public research university, ASU is committed to
            providing excellence in education through the Academic Enterprise,
            and enables the success of each unique student and increases access
            to higher education for all.
          </p>
          <a
            href="#"
            className="btn btn-gold btn-sm"
            data-ga="call to action"
            data-ga-name="onclick"
            data-ga-event="link"
            data-ga-action="click"
            data-ga-type="internal link (external if non asu.edu url)"
            data-ga-region="main content"
            data-ga-section="populate with heading text"
          >
            Call to Action
          </a>
        </div>
      </div>
    </div>
  </div>
);
