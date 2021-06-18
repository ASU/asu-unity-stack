// @ts-check
import { Card } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { cardPropTypes } from "../../../../core/models/app-prop-types";

/**
 * @typedef {import('../../../../core/models/program-detail-types').NextStepsProps} NextStepsProps
 */

/**
 *
 * @param {NextStepsProps} props
 * @returns
 */
function NextSteps({ cards }) {
  return (
    <section className="container pt-6 pb-6">
      <h2>Next steps to attend ASU</h2>
      <div className="mt-2 mb-4 row">
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
    </section>
  );
}

NextSteps.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
};

export { NextSteps };
