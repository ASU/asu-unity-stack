// @ts-check
import { AnchorMenu } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { anchorMenuPropType, progDetailSectionIds } from "../../models";

/**
 *
 * @param {{anchorMenu: import("src/core/models/program-detail-types").AnchorMenuProps}} props
 * @returns {JSX.Element}
 */
function OnThisPageAnchorMenu({ anchorMenu }) {
  /** @type {import("@asu-design-system/components-core/src/core/shared-model-types").AnchorMenuItem[]} */
  const anchorList = Object.keys(progDetailSectionIds)
    .filter(key => anchorMenu[key])
    .map(key => progDetailSectionIds[key])
    .concat(anchorMenu?.externalAnchors || []);

  return (
    <AnchorMenu
      items={anchorList}
      firstElementId={anchorList[0]?.targetIdName}
    />
  );
}

OnThisPageAnchorMenu.propTypes = {
  anchorMenu: PropTypes.shape(anchorMenuPropType),
};

export { OnThisPageAnchorMenu };
