// @ts-check

import { Accordion } from "@asu-design-system/components-core";
import { sanitize } from "dompurify";
import PropTypes from "prop-types";
import React from "react";

import { idGenerator } from "../../../../../core/utils";

function AccordionView(props) {
  const cards = [
    {
      content: {
        icon: "pencil-alt",
        header: "Accordion Card 1",
        body: "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ];

  return (
    <>
      <Accordion cards={cards} openedCard={1} />
    </>
  );
}

AccordionView.propTypes = {};

export default AccordionView;
