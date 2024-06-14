import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { CAMPUS_OPTIONS_DEFAULT, KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const Campus = ({ gaData }) => {
  const label = "Which applies to you?";
  const {
    programOfInterest,
    formik: { values },
  } = useRfiContext();

  return programOfInterest ? (
    <input type="hidden" name="Campus" value={values.Campus || KEY.NOPREF} />
  ) : (
    <RfiSelect
      label={label}
      id="Campus"
      name="Campus"
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
  );
};

Campus.propTypes = { gaData: gaEventPropTypes };
