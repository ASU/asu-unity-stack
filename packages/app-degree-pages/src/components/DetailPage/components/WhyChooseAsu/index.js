// @ts-check
import { Card } from "@asu-design-system/components-core";
import React from "react";

import { whyChooseAsuProps } from "../../../../core/models";

/**
 * @typedef {import('../../../../core/types/detail-page-types').WhyChooseAsuProps} WhyChooseAsuProps
 */

/**
 * @param {WhyChooseAsuProps} props
 * @returns {JSX.Element}
 */
const WhyChooseAsu = ({ sectionIntroText, cards, defaultCards }) => {
  return (
    <section className="container" data-testid="why-choose-asu">
      <h2>Why choose ASU</h2>
      <p>{sectionIntroText}</p>
      <div className="mt-2 row">
        <div className="mt-2 col-12 col-md-4">
          <Card
            image={cards?.faculty?.image?.url ?? defaultCards.faculty.image.url}
            imageAltText={
              cards?.faculty?.image?.altText ??
              defaultCards.faculty.image.altText
            }
            title={cards?.faculty?.title ?? defaultCards.faculty.title}
            body={cards?.faculty?.text ?? defaultCards.faculty.text}
            buttons={[cards?.faculty?.button ?? defaultCards.faculty.button]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            image={
              cards?.programs?.image?.url ?? defaultCards.programs.image.url
            }
            imageAltText={
              cards?.programs?.image?.altText ??
              defaultCards.programs.image.altText
            }
            title={cards?.programs?.title ?? defaultCards.programs.title}
            body={cards?.programs?.text ?? defaultCards.programs.text}
            buttons={[cards?.programs?.button ?? defaultCards.programs.button]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            image={
              cards?.research?.image?.url ?? defaultCards.research.image.url
            }
            imageAltText={
              cards?.research?.image?.altText ??
              defaultCards.research.image.altText
            }
            title={cards?.research?.title ?? defaultCards.research.title}
            body={cards?.research?.text ?? defaultCards.research.text}
            buttons={[cards?.research?.button ?? defaultCards.research.button]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            image={
              cards?.inclusion?.image?.url ?? defaultCards.inclusion.image.url
            }
            imageAltText={
              cards?.inclusion?.image?.altText ??
              defaultCards.inclusion.image.altText
            }
            title={cards?.inclusion?.title ?? defaultCards.inclusion.title}
            body={cards?.inclusion?.text ?? defaultCards.inclusion.text}
            buttons={[
              cards?.inclusion?.button ?? defaultCards.inclusion.button,
            ]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            image={cards?.mentors?.image?.url ?? defaultCards.mentors.image.url}
            imageAltText={
              cards?.mentors?.image?.altText ??
              defaultCards.mentors.image.altText
            }
            title={cards?.mentors?.title ?? defaultCards.mentors.title}
            body={cards?.mentors?.text ?? defaultCards.mentors.text}
            buttons={[cards?.mentors?.button ?? defaultCards.mentors.button]}
          />
        </div>
        <div className="mt-2 col-12 col-md-4">
          <Card
            image={cards?.honors?.image?.url ?? defaultCards.honors.image.url}
            imageAltText={
              cards?.honors?.image?.altText ?? defaultCards.honors.image.altText
            }
            title={cards?.honors?.title ?? defaultCards.honors.title}
            body={cards?.honors?.text ?? defaultCards.honors.text}
            buttons={[cards?.honors?.button ?? defaultCards.honors.button]}
          />
        </div>
      </div>
    </section>
  );
};

WhyChooseAsu.propTypes = whyChooseAsuProps;

export { WhyChooseAsu };
