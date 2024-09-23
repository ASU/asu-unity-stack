import React, { useEffect } from "react";

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

  const {
    programOfInterest,
    degreeData,
    campusProgramHasChoice,
    setCampusProgramHasChoice,
  } = useRfiContext();

  const hasOnlineCampus =
    campusProgramHasChoice ||
    (degreeData?.campusCodes?.includes &&
      degreeData.campusCodes.includes(KEY.ONLINE));

  useEffect(() => {
    // Once true, it will always be true, even if other conditions change
    setCampusProgramHasChoice(hasOnlineCampus || campusProgramHasChoice);
  }, [degreeData?.campusCodes]);

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
