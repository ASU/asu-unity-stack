import React from "react";

import { imageName } from "../../../../../shared/assets";
import { defaultDecorator } from "../../../../../shared/components/Layout.js";

export default {
  title: "Atoms/Blockquotes and Testimonials/Templates",
  parameters: {
  },
  args: {
    type: "On White",
    reversed: false,
  },
  argTypes: {
    type: {
      name: "Color",
      options: ["On White", "On Gray", "On Black"],
      mapping: {
        "On White": null,
        "On Gray": "bg-gray-2",
        "On Black": "bg-gray-7",
      },
      control: {
        type: "radio",
      },
    },
    reversed: {
      name: "Reversed",
      control: { type: "boolean" },
    },
  },
  decorators: [ defaultDecorator ],
};

export const BasicBlockquote = ({type}) => {
  return (
    <div className={type}>
      <div
        className={`uds-blockquote ${
          type === "bg-gray-7" ? "accent-gold text-white" : "accent-maroon"
        } uds-content-align`}
      >
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
            <div className="citation-content">
              <cite className="name">Thomas Jefferson</cite>
              <cite className="description">The Declaration of Independence</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export const BlockquoteWithImage = ({type, reversed}) => {
  return (
    <div className={type}>
      <div
        className={`uds-blockquote ${
          type === "bg-gray-7" ? "accent-gold text-white" : "accent-maroon"
        } with-image ${reversed ? "reversed" : ""} uds-content-align`}
      >
        <img
          src={ imageName.anon }
          alt="Pretend this is Michael M. Crow, President of ASU"
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          fetchpriority="high"
        />
        <blockquote>
          <p>
            ASU is a comprehensive public research university, measured not by
            whom we exclude, but rather by whom we include and how they succeed;
            advancing research and discovery of public value; and assuming
            fundamental responsibility for the economic, social, cultural and
            overall health of the communities it serves.
          </p>
          <div className="citation">
            <div className="citation-content">
              <cite className="name">Michael M. Crow</cite>
              <cite className="description">ASU Charter</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export const BlockquoteAnimated = ({type}) => {
  return (
    <div className={type}>
      <div
        className={`uds-blockquoteAnimated ${
          type === "bg-gray-7" ? "accent-gold text-white" : "accent-maroon"
        } uds-content-align`}
      >
        <blockquote>
          <h4><strong>The ASU difference:</strong></h4>
          <h2>
            <p>
            We are measured not by whom we exclude, but by <mark className="pen-yellow">whom we include</mark> and
            <mark className="pen-yellow"> how they succeed</mark>
            </p>
          </h2>
          <div className="citation">
            <div className="citation-content">
              <cite className="description">Excerpt from ASU charter</cite>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
