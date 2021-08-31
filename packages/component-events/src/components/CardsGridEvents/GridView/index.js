// @ts-check
import React from "react";

import { viewPropTypes } from "../../../core/models/prop-types";
import { GridViewWrapper } from "./index.styles";

/**
 *
 * @param {import('../../../core/models/types').ViewProps} props
 * @returns {JSX.Element}
 */
const GridView = ({ events }) => {
  return <GridViewWrapper>Grid component</GridViewWrapper>;
};

GridView.propTypes = viewPropTypes;

export { GridView };
