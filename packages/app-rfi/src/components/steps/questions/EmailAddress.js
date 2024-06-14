import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiEmailInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const EmailAddress = ({ gaData }) => {
  const label = "Email Address";
  const name = "EmailAddress";

  return (
    <RfiEmailInput
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

EmailAddress.propTypes = { gaData: gaEventPropTypes };
