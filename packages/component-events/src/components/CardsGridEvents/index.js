// @ts-check
import React from "react";

import { Events } from "../../core/components/Events";
import { Header } from "../../core/components/Header";
import { eventsPropTypes } from "../../core/models/prop-types";
import { GridView } from "./GridView";

/**
 *
 * @param {import('../../core/models/types').EventsProps} props
 * @returns {JSX.Element}
 */

const CardsGridEvents = ({ header, ctaButton, dataSource }) => {
  return (
    <section className="container">
      <Header header={header} ctaButton={ctaButton} />
      <Events dataSource={dataSource}>
        <GridView />
      </Events>
    </section>
  );
};

CardsGridEvents.propTypes = eventsPropTypes;

export { CardsGridEvents };
