// @ts-check
import { spreadClasses } from "@asu/shared";
import PropTypes from "prop-types";
import React from "react";

import { Image } from "../Image/Image";

/**
 * @typedef {import('../../core/types/blockquote-types').BlockQuoteProps} BlockQuoteProps
 */

/**
 * @param {BlockQuoteProps} props
 * @returns {JSX.Element}
 */
const BlockQuote = ({ imageSource, imageAltText, quote, itemStyle = {} }) => (
  <div
    className={`uds-blockquote uds-blockquote ${
      imageSource ? "with-image" : ""
      // @ts-ignore
    } ${spreadClasses(itemStyle.containerCssClass)}`}
  >
    {imageSource ? (
      <Image
        src={imageSource}
        alt={imageAltText}
        dataTestId="blockquote-image"
        fetchPriority="high"
      />
    ):
    <svg role="presentation" viewBox="0 0 302.87 245.82">
      <path d="M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" />
    </svg>}

    <blockquote style={{ paddingLeft: 0 }}>
      {quote.title && (
        <h3 className="text-center" data-testid="blockquote-title">
          <span className={spreadClasses(// @ts-ignore
          itemStyle.titleCssClass)}>
            {quote.title}
          </span>
        </h3>
      )}
      {quote.content && (
        <p
          className={spreadClasses(// @ts-ignore
            itemStyle.contentCssClass)}
          data-testid="blockquote-content"
        >
          {quote.content}
        </p>
      )}
      {(!!quote.cite?.name || !!quote.cite?.description) && (
        <>
        <div className="citation" data-testid="blockquote-citation">
          <cite className="name">{quote.cite.name}</cite>
        </div>
          {quote.cite && (
            <cite className="description">{quote.cite.description}</cite>
          )}
        </>
      )}
    </blockquote>
  </div>
);

BlockQuote.propTypes = {
  quote: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    cite: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
  imageSource: PropTypes.string,
  imageAltText: PropTypes.string,
  itemStyle: PropTypes.shape({
    containerCssClass: PropTypes.arrayOf(PropTypes.string),
    titleCssClass: PropTypes.arrayOf(PropTypes.string),
    contentCssClass: PropTypes.arrayOf(PropTypes.string),
  }),
};

export { BlockQuote };
