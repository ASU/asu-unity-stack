// @ts-check
import React from "react";

import { Layout } from "../../core/components/Layout";
import { eventsPropTypes } from "../../core/models/prop-types";
import { CardsGridWrapper } from "./index.styles";

/**
 *
 * @param {import('../../core/models/types').EventsProps} props
 * @returns {JSX.Element}
 */

const CardsGridEvents = ({ header, ctaButton }) => {
  return (
    <Layout header={header} ctaButton={ctaButton}>
      <CardsGridWrapper>Cards Grid Events component</CardsGridWrapper>
    </Layout>
  );
};

CardsGridEvents.propTypes = eventsPropTypes;

export { CardsGridEvents };
