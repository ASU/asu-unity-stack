import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiEmailInput } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const EmailAddress = ({ gaData }) => {
  return (
    <RfiEmailInput
      label="Email Address"
      id="EmailAddress"
      name="EmailAddress"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          section: "about me ^ email address​",
          text: e.target.value,
        })
      }
    />
  );
};

EmailAddress.propTypes = { gaData: gaEventPropTypes };
