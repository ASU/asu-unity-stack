/* eslint-disable react/require-default-props */
// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 * @param {string []} classes
 * @returns {string}
 */
const spreadClasses = classes => (classes || []).join(" ");

/**
 * @typedef {{
 *      containerCssClass?: string[]
 *      titleCssClass?: string[]
 *      contentCssClass?: string[]
 * }} TestimonialStyle
 */

/**
 * @typedef {{
 *  quote: {
 *    title?: string
 *    content: string
 *    cite?: {
 *       name: string
 *       description?: string
 *    }
 *  }
 *  imageSource?: string
 *  altText?:string
 *  itemStyle?:TestimonialStyle
 * }} TestimonialProps
 */

/**
 *
 * @param {TestimonialProps} props
 * @returns
 */
const Testimonial = ({
  imageSource = null,
  altText = null,
  quote,
  itemStyle = {},
}) => (
  <div
    className={`uds-blockquote uds-testimonial ${
      imageSource ? "with-image" : ""
    } ${spreadClasses(itemStyle.containerCssClass)}`}
  >
    {imageSource && <img src={imageSource} alt={altText} />}
    <svg role="presentation" viewBox="0 0 302.87 245.82">
      <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
    </svg>

    <blockquote style={{ paddingLeft: 0 }}>
      {quote.title && (
        <h3 className="text-center">
          <span className={spreadClasses(itemStyle.titleCssClass)}>
            {quote.title}
          </span>
        </h3>
      )}
      <p className={spreadClasses(itemStyle.contentCssClass)}>
        {quote.content}
      </p>

      {quote.cite && (
        <div className="citation">
          <cite className="name">{quote.cite.name}</cite>
          {quote.cite && (
            <cite className="description">{quote.cite.description}</cite>
          )}
        </div>
      )}
    </blockquote>
  </div>
);

Testimonial.propTypes = {
  quote: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    cite: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
  imageSource: PropTypes.string,
  altText: PropTypes.string,
  itemStyle: PropTypes.shape({
    containerCssClass: PropTypes.arrayOf(PropTypes.string),
    titleCssClass: PropTypes.arrayOf(PropTypes.string),
    contentCssClass: PropTypes.arrayOf(PropTypes.string),
  }),
};

export { Testimonial };
