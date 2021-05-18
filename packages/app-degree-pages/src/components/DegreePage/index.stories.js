/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { DegreePage } from ".";

export default {
  component: DegreePage,
  title: "Degree Page",
};

/**
 * @param {object} props
 * @returns {JSX.Element}
 */
export const DefaultView = ({ image }) => (
  <DegreePage
    hero={{
      image,
    }}
  />
);

DefaultView.args = {
  image: {
    url: "https://source.unsplash.com/random/800x400?a=1",
  },
};
