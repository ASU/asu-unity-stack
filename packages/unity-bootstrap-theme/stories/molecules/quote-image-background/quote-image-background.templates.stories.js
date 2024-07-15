import React from "react";

import { imageName } from "../../../../../shared/assets";
import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Molecules/Content Sections/Quote On Image Background/Templates",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};

export const Default = () => (
  <div
    className="uds-quote-image-background"
    style={{
      backgroundImage:
        `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url('${ imageName.hero02 }')`,
    }}
  >
    <div className="uds-content-align">
      <div className="uds-blockquote accent-gold">
        <svg title="Open quote" role="presentation" viewBox="0 0 302.87 245.82">
          <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
        </svg>
        <blockquote>
          <p>
            We hold these truths to be self-evident, that all men are created
            equal, that they are endowed by their Creator with certain
            unalienable Rights, that among these are Life, Liberty and the
            pursuit of Happiness.
          </p>
          <div className="citation">
            <cite className="name">Thomas Jefferson</cite>
            <cite className="description">The Declaration of Independence</cite>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
);
