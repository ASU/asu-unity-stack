// @ts-check
import { AnchorMenu } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { anchorMenuPropType, progDetailSectionIds } from "../../models";

/**
 *
 * @param {{anchorMenu: import("src/core/models/program-detail-types").AnchorMenuProps}} props
 * @returns
 */
function OnThisPageAnchorMenu({ anchorMenu }) {
  const anchorList = Object.keys(progDetailSectionIds)
    .filter(key => anchorMenu[key])
    .map(key => progDetailSectionIds[key])
    .concat(anchorMenu.externalAnchors);

  return <AnchorMenu items={anchorList} />;
}

OnThisPageAnchorMenu.propTypes = {
  anchorMenu: PropTypes.shape(anchorMenuPropType),
};

export { OnThisPageAnchorMenu };
