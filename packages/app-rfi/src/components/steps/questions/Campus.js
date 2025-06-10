import React, { useEffect } from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { CAMPUS_OPTIONS_DEFAULT, KEY } from "../../../core/utils/constants";
import { useRfiContext } from "../../../core/utils/rfiContext";
import { RfiSelect } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
// eslint-disable-next-line react/prop-types
export const Campus = ({ gaData, autoFocus }) => {
  const label = "Which applies to you?";
  const name = "Campus";

  const {
    programOfInterest,
    formik: { values, setFieldValue },
  } = useRfiContext();

  useEffect(() => {
    if (programOfInterest) {
      setFieldValue(name, values.Campus || KEY.NOPREF);
    }
  }, []);

  if (programOfInterest) {
    return <></>;
  }

  return (
    <RfiSelect
      label={label}
      id={name}
      name={name}
      options={CAMPUS_OPTIONS_DEFAULT}
      requiredIcon
      required
      autoFocus={autoFocus}
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
