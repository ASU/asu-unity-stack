// @ts-check
import React from "react";

import { Layout } from "../../core/components/Layout";
import { eventsPropTypes } from "../../core/models/prop-types";
import { CardsListWrapper } from "./index.styles";

/**
 *
 * @param {import('../../core/models/types').EventsProps} props
 * @returns {JSX.Element}
 */

const CardsListEvents = ({ header, ctaButton }) => {
  return (
    <Layout header={header} ctaButton={ctaButton}>
      <CardsListWrapper>Cards List Events component</CardsListWrapper>
    </Layout>
  );
};

CardsListEvents.propTypes = eventsPropTypes;

export { CardsListEvents };
