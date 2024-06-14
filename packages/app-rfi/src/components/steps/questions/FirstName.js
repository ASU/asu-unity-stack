import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const FirstName = ({ gaData }) => {
  const label = "First name";
  const name = "FirstName";

  return (
    <RfiTextInput
      label={label}
      id={name}
      name={name}
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          type: label,
          text: e.target.value,
        })
      }
    />
  );
};

FirstName.propTypes = { gaData: gaEventPropTypes };
