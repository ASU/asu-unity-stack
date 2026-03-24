import { sanitizeDangerousMarkup } from "@asu/shared";
import React from "react";

import { Button } from "../Button/Button";

export interface RankingItem {
  value: string;
  title?: string;
  description?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5";
}

export interface HighlyRankedProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  ctaButtonColor?: "dark" | "gold" | "maroon" | "gray";
  rankings?: RankingItem[];
}

export const HighlyRanked: React.FC<HighlyRankedProps> = ({
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
                    <span
                      className={`ranking-value-main${ranking.headingLevel ? ` ${ranking.headingLevel}` : " h1"}`}
                    >
                      {ranking.value}
                    </span>
                    {ranking.title && (
                      <span className="ranking-value-subsection">
                        {ranking.title}
                      </span>
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
