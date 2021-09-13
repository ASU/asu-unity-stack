// @ts-check
import { Card } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { progDetailSectionIds, cardPropShape } from "../../../../core/models";

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
    <section
      className="container"
      id={progDetailSectionIds.nextSteps.targetIdName}
      data-testid="next-steps"
    >
      <h2>Next steps to attend ASU</h2>
      <div className="mt-2 row">
        {cards?.map(card => (
          <div className="mt-2 col-12 col-md-4" key={card.title}>
            <Card
              icon={card.icon}
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
  cards: PropTypes.arrayOf(cardPropShape).isRequired,
};

export { NextSteps };
