// @ts-check
import { Card } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { cardPropTypes } from "../../../../core/models/app-prop-types";
import { Section, Background } from "./index.style";

/**
 * @typedef {import('../../../../core/models/program-detail-types').AffordingCollegeProps} AffordingCollegeProps
 */

/**
 *
 * @param {AffordingCollegeProps} props
 * @returns
 */
function AffordingCollege({ cards }) {
  return (
    <Section className="container pt-6 pb-6">
      <Background />
      <h2>
        <span className="highlight-gold">Affording college</span>
      </h2>
      <div className="mt-2 mb-2 row">
        {cards?.map(card => (
          <div className="mt-2 col-12 col-md-4">
            <Card
              icon={["fas", card.icon]}
              title={card.title}
              body={card.content}
              buttons={[card.buttonLink]}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

AffordingCollege.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
};

export { AffordingCollege };
