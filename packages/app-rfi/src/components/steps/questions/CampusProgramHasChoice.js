import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { CAMPUS_OPTIONS_DEFAULT, KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const CampusProgramHasChoice = ({ gaData }) => {
  const { programOfInterest, degreeData } = useRfiContext();

  const hasOnlineCampus =
    degreeData?.campusCodes?.includes &&
    degreeData.campusCodes.includes(KEY.ONLINE);

  return (
    <>
      {programOfInterest && hasOnlineCampus && (
        <RfiSelect
          label="Which applies to you?"
          id="CampusProgramHasChoice"
          name="CampusProgramHasChoice"
          options={CAMPUS_OPTIONS_DEFAULT}
          requiredIcon
          required
          onBlur={e =>
            trackGAEvent({
              ...gaData,
              type: "Which applies to you?",
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
