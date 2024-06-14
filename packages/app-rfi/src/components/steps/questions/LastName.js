import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiTextInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const LastName = ({ gaData }) => {
  const label = "Last name";
  const name = "LastName";

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

LastName.propTypes = { gaData: gaEventPropTypes };
