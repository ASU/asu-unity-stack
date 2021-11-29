// @ts-check
import { Card } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { progDetailSectionIds, cardPropShape } from "../../../../core/models";

/**
 * @typedef {import('../../../../core/types/detail-page-types').NextStepsProps} NextStepsProps
 */

/**
 *
 * @param {NextStepsProps} props
 * @returns
 */
function NextSteps({ cards, defaultCards }) {
  return (
    <section
      className="container"
      id={progDetailSectionIds.nextSteps.targetIdName}
      data-testid="next-steps"
    >
      <h2>Next steps to attend ASU</h2>
      <div className="mt-2 row">
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={cards?.learnMore?.icon ?? defaultCards.learnMore.icon}
            title={cards?.learnMore?.title ?? defaultCards.learnMore.title}
            body={cards?.learnMore?.content ?? defaultCards.learnMore.content}
            buttons={[
              cards?.learnMore?.buttonLink ?? defaultCards.learnMore.buttonLink,
            ]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={cards?.apply?.icon ?? defaultCards.apply.icon}
            title={cards?.apply?.title ?? defaultCards.apply.title}
            body={cards?.apply?.content ?? defaultCards.apply.content}
            buttons={[
              cards?.apply?.buttonLink ?? defaultCards.apply.buttonLink,
            ]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            icon={cards?.visit?.icon ?? defaultCards.visit.icon}
            title={cards?.visit?.title ?? defaultCards.visit.title}
            body={cards?.visit?.content ?? defaultCards.visit.content}
            buttons={[
              cards?.visit?.buttonLink ?? defaultCards.visit.buttonLink,
            ]}
          />
        </div>
      </div>
    </section>
  );
}

NextSteps.propTypes = {
  cards: PropTypes.shape({
    learnMore: cardPropShape,
    apply: cardPropShape,
    visit: cardPropShape,
  }),
  defaultCards: PropTypes.shape({
    learnMore: cardPropShape,
    apply: cardPropShape,
    visit: cardPropShape,
  }),
};

export { NextSteps };
