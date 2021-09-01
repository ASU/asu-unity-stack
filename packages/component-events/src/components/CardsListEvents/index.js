// @ts-check
import React from "react";

import { EventsFeedProvider } from "../../core/components/EventsFeedProvider";
import { Header } from "../../core/components/Header";
import { eventsPropTypes } from "../../core/models/prop-types";
import { ListView } from "./ListView";

/**
 *
 * @param {import('../../core/models/types').EventsProps} props
 * @returns {JSX.Element}
 */

const CardsListEvents = ({ header, ctaButton, dataSource }) => {
  return (
    <section className="container">
      <Header header={header} ctaButton={ctaButton} />
      <EventsFeedProvider dataSource={dataSource}>
        <ListView />
      </EventsFeedProvider>
    </section>
  );
};

CardsListEvents.propTypes = eventsPropTypes;

export { CardsListEvents };
