// @ts-check
import { sanitizeDangerousMarkup } from "@asu/shared";
import PropTypes from "prop-types";
import React from "react";

import { Button } from "../Button/Button";

/**
 * @typedef {Object} RankingItem
 * @property {string} value - The main ranking value (e.g., "400+", "#2")
 * @property {string} title - The title of the ranking (e.g., "‘prestigious faculty’")
 * @property {string} description - The description of the ranking
 */

/**
 * @typedef {Object} HighlyRankedProps
 * @property {string} [title] - The section title
 * @property {string} [description] - The section description
 * @property {string} [ctaText] - The text for the CTA button
 * @property {string} [ctaUrl] - The URL for the CTA button
 * @property {"dark" | "gold" | "maroon" | "gray"} [ctaButtonColor] - The color of the CTA button
 * @property {RankingItem[]} [rankings] - The list of rankings to display
 */

/**
 * @param {HighlyRankedProps} props
 * @returns {JSX.Element}
 */
export const HighlyRanked = ({
  title = "Highly ranked",
  description = "",
  ctaText = "",
  ctaUrl = "",
  ctaButtonColor = "dark",
  rankings = [],
}) => {
  return (
    <section className="highly-ranked-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            {title && (
              <h2 className="highly-ranked-title">
                <span className="highlight-gold">{title}</span>
              </h2>
            )}
            {description && (
              <p
                className="highly-ranked-description"
                dangerouslySetInnerHTML={sanitizeDangerousMarkup(description)}
              />
            )}
            {ctaText && ctaUrl && (
              <div className="highly-ranked-cta">
                <Button
                  label={ctaText}
                  href={ctaUrl}
                  color={ctaButtonColor}
                  size={"small"}
                  classes={[]}
                />
              </div>
            )}
          </div>
        </div>

        <div className="row highly-ranked-grid">
          {rankings.map((ranking, index) => (
            <div key={index} className="col-12 col-lg-6 mb-4">
              <div className="highly-ranked-card">
                <div className="ranking-value-container">
                  <h3 className="ranking-value">
                    <span className="ranking-value-number">
                      {ranking.value}
                    </span>
                    {ranking.title && (
                      <span className="ranking-title">{ranking.title}</span>
                    )}
                  </h3>
                </div>

                {ranking.description && (
                  <div className="ranking-content">
                    <p
                      className="ranking-description"
                      dangerouslySetInnerHTML={sanitizeDangerousMarkup(
                        ranking.description
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

HighlyRanked.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  rankings: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  ctaButtonColor: PropTypes.oneOf(["dark", "gold", "maroon", "gray"]),
};
