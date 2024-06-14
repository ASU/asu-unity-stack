import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { CAMPUS_OPTIONS_DEFAULT, KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const CampusProgramHasChoice = ({ gaData }) => {
  const label = "Which applies to you?";
  const name = "CampusProgramHasChoice";

  const { programOfInterest, degreeData } = useRfiContext();

  const hasOnlineCampus =
    degreeData?.campusCodes?.includes &&
    degreeData.campusCodes.includes(KEY.ONLINE);

  return (
    <>
      {programOfInterest && hasOnlineCampus && (
        <RfiSelect
          label={label}
          id={name}
          name={name}
          options={CAMPUS_OPTIONS_DEFAULT}
          requiredIcon
          required
          onBlur={e =>
            trackGAEvent({
              ...gaData,
              event: "select",
              type: label,
              text: e.target.selectedOptions[0].innerText,
            })
          }
        />
      )}
    </>
  );
};

CampusProgramHasChoice.propTypes = {
  gaData: gaEventPropTypes,
};
