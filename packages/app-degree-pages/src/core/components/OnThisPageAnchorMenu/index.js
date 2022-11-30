// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { AnchorMenu } from "../../../../../components-core/src/components/AnchorMenu";

import { anchorMenuPropType, progDetailSectionIds } from "../../models";

/**
 * @typedef {import("@asu-design-system/components-core").AnchorMenuItem} AnchorMenuItem
 * */

/**
 *
 * @param {{anchorMenu: import("src/core/types/detail-page-types").AnchorMenuProps}} props
 * @returns {JSX.Element}
 */
function OnThisPageAnchorMenu({ anchorMenu }) {
  // clean up those targetIdNames bad formatted
  /** @type {AnchorMenuItem[]} */
  const externalAnchors = anchorMenu?.externalAnchors?.map(anchorItem => {
    const { targetIdName, text } = anchorItem;
    return {
      targetIdName: targetIdName.startsWith("#")
        ? targetIdName.substring(1)
        : targetIdName,
      text,
      icon: null,
    };
  });

  /** @type {AnchorMenuItem[]} */
  const anchorList = Object.keys(progDetailSectionIds)
    .filter(key => anchorMenu[key])
    .map(key => progDetailSectionIds[key])
    .concat(externalAnchors || []);

  return (
    <AnchorMenu
      items={anchorList}
      firstElementId={anchorList[0]?.targetIdName}
      focusFirstFocusableElement
    />
  );
}

OnThisPageAnchorMenu.propTypes = {
  anchorMenu: PropTypes.shape(anchorMenuPropType),
};

export { OnThisPageAnchorMenu };
