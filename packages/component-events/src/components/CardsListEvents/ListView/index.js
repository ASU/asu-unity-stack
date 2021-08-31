// @ts-check
import React from "react";

import { viewPropTypes } from "../../../core/models/prop-types";
import { ListViewWrapper } from "./index.styles";

/**
 *
 * @param {import('../../../core/models/types').ViewProps} props
 * @returns {JSX.Element}
 */
const ListView = ({ events }) => {
  return <ListViewWrapper>List component</ListViewWrapper>;
};

ListView.propTypes = viewPropTypes;

export { ListView };
