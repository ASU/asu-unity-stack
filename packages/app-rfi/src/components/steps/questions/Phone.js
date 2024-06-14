import React from "react";

import { gaEventPropTypes, trackGAEvent } from "../../../../../../shared";
import { RfiPhone } from "../../controls";

/**
 * @param {{ gaData: import("../../../../../../shared/services/googleAnalytics").GAEventObject}} props
 */
export const Phone = ({ gaData }) => {
  return (
    <RfiPhone
      label="Phone"
      id="Phone"
      name="Phone"
      requiredIcon
      required
      onBlur={e =>
        trackGAEvent({
          ...gaData,
          section: "about me ^ phone number​",
          text: e.target.value,
        })
      }
    />
  );
};

Phone.propTypes = { gaData: gaEventPropTypes };
