import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import {
  CAMPUS_OPTIONS_DEFAULT,
  GA_EVENT_DEFAULT,
  KEY,
} from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

export const CampusProgramHasChoice = () => {
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
              ...GA_EVENT_DEFAULT,
              type: "Which applies to you?",
              text: e.target.selectedOptions[0].innerText,
            })
          }
        />
      )}
    </>
  );
};
